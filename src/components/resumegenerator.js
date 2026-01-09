import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import WorldFlag from 'react-world-flags';
import Footer from "./footer";

const translations = {
    en: {
        title: "Resume Generator",
        freeBanner: "💰 100% Free - No registration required! Generate and download your PDF resume. Good luck with your job search!",
        privacy: "ℹ️ Your data stays in your browser. Nothing is stored on our servers.",
        colorTitle: "How to Choose a Color (Color Psychology)",
        colors: [
            { name: "Blue", hex: "#0052D4", desc: "Reliable & stable (IT, Finance)" },
            { name: "Teal", hex: "#008B8B", desc: "Modern & tech-savvy (Startups, Tech)" },
            { name: "Green", hex: "#2E7D32", desc: "Growth-oriented (Sales, Marketing)" },
            { name: "Purple", hex: "#6A1B9A", desc: "Creative & innovative (Design, Creative)" },
            { name: "Dark Grey", hex: "#424242", desc: "Professional (Management, Leadership)" },
            { name: "Burgundy", hex: "#8B0000", desc: "Experienced & senior (Executive)" }
        ],
        photoLabel: "Include photo in resume",
        uploadPhoto: "Upload Photo"
    },
    de: {
        title: "Lebenslauf Generator",
        freeBanner: "💰 100% Kostenlos - Keine Registrierung erforderlich! Erstellen und laden Sie Ihren PDF-Lebenslauf herunter. Viel Erfolg bei Ihrer Jobsuche!",
        privacy: "ℹ️ Ihre Daten bleiben in Ihrem Browser. Nichts wird auf unseren Servern gespeichert.",
        colorTitle: "Wie wähle ich eine Farbe (Farbpsychologie)",
        colors: [
            { name: "Blau", hex: "#0052D4", desc: "Zuverlässig & stabil (IT, Finanzen)" },
            { name: "Türkis", hex: "#008B8B", desc: "Modern & technisch (Startups, Tech)" },
            { name: "Grün", hex: "#2E7D32", desc: "Wachstumsorientiert (Vertrieb, Marketing)" },
            { name: "Lila", hex: "#6A1B9A", desc: "Kreativ & innovativ (Design, Kreativ)" },
            { name: "Dunkelgrau", hex: "#424242", desc: "Professionell (Management, Führung)" },
            { name: "Bordeaux", hex: "#8B0000", desc: "Erfahren & senior (Führungskraft)" }
        ],
        photoLabel: "Foto im Lebenslauf einschließen",
        uploadPhoto: "Foto hochladen"
    },
    it: {
        title: "Generatore di CV",
        freeBanner: "💰 100% Gratuito - Nessuna registrazione richiesta! Genera e scarica il tuo CV in PDF. In bocca al lupo per la tua ricerca di lavoro!",
        privacy: "ℹ️ I tuoi dati rimangono nel tuo browser. Nulla viene memorizzato sui nostri server.",
        colorTitle: "Come scegliere un colore (Psicologia del colore)",
        colors: [
            { name: "Blu", hex: "#0052D4", desc: "Affidabile & stabile (IT, Finanza)" },
            { name: "Turchese", hex: "#008B8B", desc: "Moderno & tecnologico (Startup, Tech)" },
            { name: "Verde", hex: "#2E7D32", desc: "Orientato alla crescita (Vendite, Marketing)" },
            { name: "Viola", hex: "#6A1B9A", desc: "Creativo & innovativo (Design, Creativo)" },
            { name: "Grigio scuro", hex: "#424242", desc: "Professionale (Management, Leadership)" },
            { name: "Bordeaux", hex: "#8B0000", desc: "Esperto & senior (Dirigente)" }
        ],
        photoLabel: "Includi foto nel CV",
        uploadPhoto: "Carica foto"
    },
    hu: {
        title: "Önéletrajz Generátor",
        freeBanner: "💰 100% Ingyenes - Regisztráció nem szükséges! Generáld és töltsd le PDF önéletrajzodat. Sok sikert az álláskereséshez!",
        privacy: "ℹ️ Az adataid a böngésződben maradnak. Semmit nem tárolunk a szervereinken.",
        colorTitle: "Hogyan válassz színt (Szín pszichológia)",
        colors: [
            { name: "Kék", hex: "#0052D4", desc: "Megbízható & stabil (IT, Pénzügy)" },
            { name: "Türkiz", hex: "#008B8B", desc: "Modern & technológiai (Startup, Tech)" },
            { name: "Zöld", hex: "#2E7D32", desc: "Növekedésorientált (Értékesítés, Marketing)" },
            { name: "Lila", hex: "#6A1B9A", desc: "Kreatív & innovatív (Design, Kreatív)" },
            { name: "Sötét szürke", hex: "#424242", desc: "Professzionális (Vezetés, Management)" },
            { name: "Bordó", hex: "#8B0000", desc: "Tapasztalt & senior (Felsővezető)" }
        ],
        photoLabel: "Fotó az önéletrajzban",
        uploadPhoto: "Fotó feltöltése"
    }
};

const ResumeGenerator = () => {
    const { lang } = useParams();
    const t = translations[lang] || translations.en;

    const [selectedColor, setSelectedColor] = useState("#0052D4");
    const [hasPhoto, setHasPhoto] = useState(false);

    const flags = [
        { code: 'en', flag: 'GB', name: 'English' },
        { code: 'de', flag: 'DE', name: 'Deutsch' },
        { code: 'it', flag: 'IT', name: 'Italiano' },
        { code: 'hu', flag: 'HU', name: 'Magyar' }
    ];

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

                        {/* Színválasztó */}
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

                        {/* Fotó opció */}
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
                                    <button className="upload-btn">{t.uploadPhoto}</button>
                                </div>
                            )}
                        </div>

                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    );
};

export default ResumeGenerator;
