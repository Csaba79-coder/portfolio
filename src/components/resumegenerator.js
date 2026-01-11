import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import WorldFlag from 'react-world-flags';
import Footer from "./footer";
import { translations, allLanguages } from './translations';
import { pdf } from '@react-pdf/renderer';
import CVPdfDocument from './CVPdfDocument';

const ResumeGenerator = () => {
    const { lang } = useParams();
    const t = translations[lang] || translations.en;

    useEffect(() => {
        document.title = t.title;
        document.documentElement.lang = lang;
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', t.metaDescription);
    }, [t.title, t.metaDescription, lang]); 

    const [selectedColor, setSelectedColor] = useState("#0052D4");
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photoPreview, setPhotoPreview] = useState(null);

    // Contact
    const [name, setName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [location, setLocation] = useState("");
    const [nationality, setNationality] = useState("");
    const [drivingLicense, setDrivingLicense] = useState("");

    // Skills
    const [skillInput, setSkillInput] = useState("");
    const [skills, setSkills] = useState([]);

    // Languages
    const [selectedLang, setSelectedLang] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [languages, setLanguages] = useState([]);
    const [showLanguageLevels, setShowLanguageLevels] = useState(true);

    // Preview
    const [showPreview, setShowPreview] = useState(false);

    const flags = [
        { code: 'en', flag: 'GB', name: 'English' },
        { code: 'de', flag: 'DE', name: 'Deutsch' },
        { code: 'it', flag: 'IT', name: 'Italiano' },
        { code: 'hu', flag: 'HU', name: 'Magyar' }
    ];

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddSkill = () => {
        if (skillInput.trim()) {
            setSkills([...skills, skillInput.trim()]);
            setSkillInput("");
        }
    };

    const handleRemoveSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    const handleAddLanguage = () => {
        if (selectedLang && selectedLevel) {
            setLanguages([...languages, { language: selectedLang, level: selectedLevel }]);
            setSelectedLang("");
            setSelectedLevel("");
        }
    };

    const handleRemoveLanguage = (index) => {
        setLanguages(languages.filter((_, i) => i !== index));
    };

    const handleGeneratePDF = async () => {
        try {
            const blob = await pdf(
                <CVPdfDocument
                    name={name}
                    jobTitle={jobTitle}
                    email={email}
                    phone={phone}
                    website={website}
                    linkedin={linkedin}
                    location={location}
                    nationality={nationality}
                    drivingLicense={drivingLicense}
                    skills={skills}
                    languages={languages}
                    showLanguageLevels={showLanguageLevels}
                    selectedColor={selectedColor}
                    hasPhoto={hasPhoto}
                    photoPreview={photoPreview}
                    t={t}
                />
            ).toBlob();

            const cleanName = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '_');
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${cleanName}_${lang}.pdf`;
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('PDF generation error:', error);
        }
    };

    return (
        <div className='page-wrapper'>
            <div className='resume-generator-body page-content'>
                <Grid container>
                    <Grid item xs={12}>
                        <div className="language-selector">
                            {flags.map(f => (
                                <Link
                                    key={f.code}
                                    to={`/resume-generator/${f.code}`}
                                    className={lang === f.code ? 'flag-active' : 'flag'}
                                >
                                    <WorldFlag code={f.flag} className="flag-icon-svg" />
                                    <span className="flag-name">{f.name}</span>
                                </Link>
                            ))}
                        </div>

                        <h1>{t.title}</h1>

                        <div className="free-banner">
                            {t.freeBanner}
                        </div>

                        <div className="privacy-banner">
                            {t.privacy}
                        </div>

                        {/* Color selector */}
                        <div className="config-section">
                            <h3>{t.colorTitle}</h3>
                            <div className="color-selector">
                                {t.colors.map((color, idx) => (
                                    <div
                                        key={idx}
                                        className={`color-option ${selectedColor === color.hex ? 'color-selected' : ''}`}
                                        onClick={() => setSelectedColor(color.hex)}
                                    >
                                        <div
                                            className="color-box"
                                            style={{ backgroundColor: color.hex }}
                                        ></div>
                                        <div className="color-info">
                                            <strong>{color.name}</strong>
                                            <p>{color.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Photo option */}
                        <div className="config-section">
                            <label className="photo-checkbox">
                                <input
                                    type="checkbox"
                                    checked={hasPhoto}
                                    onChange={(e) => setHasPhoto(e.target.checked)}
                                />
                                <span>{t.photoLabel}</span>
                            </label>

                            {hasPhoto && (
                                <div className="photo-upload">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoUpload}
                                        id="photo-input"
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor="photo-input" className="upload-btn">
                                        {t.uploadPhoto}
                                    </label>
                                    {photoPreview && (
                                        <div className="photo-preview-box">
                                            <img src={photoPreview} alt="Preview" className="photo-preview-img" />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* FORM */}
                        <div className="form-section">
                            <h2>{t.contactInfo}</h2>
                            <div className="form-grid">
                                <input
                                    type="text"
                                    placeholder={t.name + " *"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder={t.jobTitle + " *"}
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder={t.email + " *"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder={t.phone + " *"}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="url"
                                    placeholder={t.website}
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                    className="form-input"
                                />
                                <input
                                    type="url"
                                    placeholder={t.linkedin}
                                    value={linkedin}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                    className="form-input"
                                />
                                <input
                                    type="text"
                                    placeholder={t.location}
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="form-input"
                                />
                                <input
                                    type="text"
                                    placeholder={t.nationality}
                                    value={nationality}
                                    onChange={(e) => setNationality(e.target.value)}
                                    className="form-input"
                                />
                                <input
                                    type="text"
                                    placeholder={t.drivingLicense}
                                    value={drivingLicense}
                                    onChange={(e) => setDrivingLicense(e.target.value)}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="form-section">
                            <h2>{t.skillsTitle}</h2>
                            <div className="add-item-row">
                                <input
                                    type="text"
                                    placeholder={t.skillPlaceholder}
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                                    className="form-input"
                                />
                                <button onClick={handleAddSkill} className="add-btn">{t.addSkill}</button>
                            </div>
                            <div className="items-list">
                                {skills.map((skill, idx) => (
                                    <div key={idx} className="list-item">
                                        <span>{skill}</span>
                                        <button onClick={() => handleRemoveSkill(idx)} className="remove-btn">×</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="form-section">
                            <h2>{t.languagesTitle}</h2>
                            <div className="add-item-row">
                                <select
                                    value={selectedLang}
                                    onChange={(e) => setSelectedLang(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">{t.selectLanguage}</option>
                                    {allLanguages[lang].map((l, idx) => (
                                        <option key={idx} value={l}>{l}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">{t.selectLevel}</option>
                                    {Object.entries(t.levels).map(([key, label]) => (
                                        <option key={key} value={key}>{label}</option>
                                    ))}
                                </select>
                                <button onClick={handleAddLanguage} className="add-btn">{t.addLanguage}</button>
                            </div>
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={showLanguageLevels}
                                    onChange={(e) => setShowLanguageLevels(e.target.checked)}
                                />
                                <span>{t.showLevels}</span>
                            </label>
                            <div className="items-list">
                                {languages.map((l, idx) => (
                                    <div key={idx} className="list-item">
                                        <span>{l.language} - {l.level}</span>
                                        <button onClick={() => handleRemoveLanguage(idx)} className="remove-btn">×</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Preview Button */}
                        <div className="preview-btn-container">
                            <button onClick={() => setShowPreview(true)} className="preview-main-btn">
                                {t.previewBtn}
                            </button>
                        </div>

                    </Grid>
                </Grid>
            </div>

            {showPreview && (
                <div className="preview-modal" style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}>
                    <div className="preview-content">
                        <div className="preview-header">
                            <button onClick={() => setShowPreview(false)} className="close-preview-btn">
                                {t.closePreview}
                            </button>
                            <button onClick={handleGeneratePDF} className="generate-pdf-btn">
                                {t.generatePDF}
                            </button>
                        </div>

                        {/* CV Preview */}
                        <div className="cv-preview" style={{ backgroundColor: '#ffffff', colorScheme: 'light', filter: 'none' }}>
                            <div className="cv-sidebar" style={{ backgroundColor: selectedColor }}>
                                {hasPhoto && photoPreview && (
                                    <div className="cv-photo-container">
                                        <img src={photoPreview} alt="Profile" className="cv-photo" />
                                    </div>
                                )}
                                <h1 className="cv-name">{name || "Your Name"}</h1>
                                <p className="cv-job-title">{jobTitle || "Job Title"}</p>

                                <div className="cv-contact">
                                    {email && <p>✉️ {email}</p>}
                                    {phone && <p>📞 {phone}</p>}
                                    {website && <p>🌐 {website}</p>}
                                    {linkedin && <p>💼 LinkedIn</p>}
                                    {location && <p>📍 {location}</p>}
                                    {nationality && <p>🏳️ {nationality}</p>}
                                    {drivingLicense && <p>🚗 {drivingLicense}</p>}
                                </div>

                                {skills.length > 0 && (
                                    <div className="cv-section">
                                        <h3>{t.cvSections.skills}</h3>
                                        <ul>
                                            {skills.map((skill, idx) => (
                                                <li key={idx}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {languages.length > 0 && (
                                    <div className="cv-section">
                                        <h3>{t.cvSections.languages}</h3>
                                        {languages.map((l, idx) => (
                                            <div key={idx} className="cv-language">
                                                <p>{l.language}</p>
                                                {showLanguageLevels && (
                                                    <div className="language-level-display">
                                                        <div className="language-bar-container">
                                                            <div
                                                                className="language-bar"
                                                                style={{
                                                                    width: `${
                                                                        l.level === 'Native' ? 100 :
                                                                            l.level === 'C2' ? 95 :
                                                                                l.level === 'C1' ? 85 :
                                                                                    l.level === 'B2' ? 75 :
                                                                                        l.level === 'B1' ? 60 :
                                                                                            l.level === 'A2' ? 40 : 20
                                                                    }%`
                                                                }}
                                                            ></div>
                                                        </div>
                                                        <span className="language-level-text">({l.level})</span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="cv-main" style={{
                                backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=")',
                                backgroundRepeat: 'repeat',
                                color: '#000000',
                                WebkitTextFillColor: '#000000',
                                filter: 'none'
                            }}>
                                <h2 style={{ color: '#000000', borderBottom: '2px solid #000000', backgroundColor: 'transparent' }}>
                                    {t.cvSections.profile}
                                </h2>
                                <p style={{ color: '#000000' }}>Profile section coming soon...</p>

                                <h2 style={{ color: '#000000', borderBottom: '2px solid #000000', backgroundColor: 'transparent' }}>
                                    {t.cvSections.experience}
                                </h2>
                                <p style={{ color: '#000000' }}>Experience section coming soon...</p>

                                <h2 style={{ color: '#000000', borderBottom: '2px solid #000000', backgroundColor: 'transparent' }}>
                                    {t.cvSections.education}
                                </h2>
                                <p style={{ color: '#000000' }}>Education section coming soon...</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ResumeGenerator;
