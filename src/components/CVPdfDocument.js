import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Register fonts (optional - you can use default fonts or custom ones)
// Font.register({ family: 'Anton', src: '...' });

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    sidebar: {
        width: '35%',
        padding: 40,
        paddingBottom: 0,
        color: '#ffffff',
    },
    main: {
        width: '65%',
        padding: 40,
        backgroundColor: '#ffffff',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    jobTitle: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
    },
    contactSection: {
        fontSize: 10,
        marginBottom: 20,
    },
    contactItem: {
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        borderBottom: '2px solid #ffffff',
        paddingBottom: 5,
    },
    sectionTitleMain: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        borderBottom: '2px solid #000000',
        paddingBottom: 5,
    },
    skillsList: {
        fontSize: 10,
        marginBottom: 5,
    },
    languageItem: {
        fontSize: 10,
        marginBottom: 10,
    },
    languageBarContainer: {
        width: '100%',
        height: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginTop: 5,
        marginBottom: 3,
        borderRadius: 4,
    },
    languageBar: {
        height: 8,
        backgroundColor: '#ffffff',
        borderRadius: 4,
    },
    mainText: {
        fontSize: 12,
        lineHeight: 1.6,
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        objectFit: 'cover',
    },
});

const CVPdfDocument = ({
    name,
    jobTitle,
    email,
    phone,
    website,
    linkedin,
    location,
    nationality,
    drivingLicense,
    skills,
    languages,
    showLanguageLevels,
    selectedColor,
    hasPhoto,
    photoPreview,
    t
}) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Left Sidebar */}
                <View style={[styles.sidebar, { backgroundColor: selectedColor }]}>
                    {hasPhoto && photoPreview && (
                        <View style={{ alignItems: 'center', marginBottom: 20 }}>
                            <Image src={photoPreview} style={styles.photo} />
                        </View>
                    )}

                    <Text style={styles.name}>{name || "Your Name"}</Text>
                    <Text style={styles.jobTitle}>{jobTitle || "Job Title"}</Text>

                    {/* Contact Info */}
                    <View style={styles.contactSection}>
                        {email && <Text style={styles.contactItem}>✉ {email}</Text>}
                        {phone && <Text style={styles.contactItem}>☎ {phone}</Text>}
                        {website && <Text style={styles.contactItem}>⌘ {website}</Text>}
                        {linkedin && <Text style={styles.contactItem}>⚲ LinkedIn</Text>}
                        {location && <Text style={styles.contactItem}>⌖ {location}</Text>}
                        {nationality && <Text style={styles.contactItem}>⚑ {nationality}</Text>}
                        {drivingLicense && <Text style={styles.contactItem}>⚐ {drivingLicense}</Text>}
                    </View>

                    {/* Skills */}
                    {skills.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitle}>{t.cvSections.skills}</Text>
                            {skills.map((skill, idx) => (
                                <Text key={idx} style={styles.skillsList}>• {skill}</Text>
                            ))}
                        </View>
                    )}

                    {/* Languages */}
                    {languages.length > 0 && (
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.sectionTitle}>{t.cvSections.languages}</Text>
                            {languages.map((l, idx) => {
                                const levelWidth =
                                    l.level === 'Native' ? 100 :
                                    l.level === 'C2' ? 95 :
                                    l.level === 'C1' ? 85 :
                                    l.level === 'B2' ? 75 :
                                    l.level === 'B1' ? 60 :
                                    l.level === 'A2' ? 40 : 20;

                                return (
                                    <View key={idx} style={styles.languageItem}>
                                        <Text>{l.language}</Text>
                                        {showLanguageLevels && (
                                            <View>
                                                <View style={styles.languageBarContainer}>
                                                    <View style={[styles.languageBar, { width: `${levelWidth}%` }]} />
                                                </View>
                                                <Text style={{ fontSize: 9 }}>({l.level})</Text>
                                            </View>
                                        )}
                                    </View>
                                );
                            })}
                        </View>
                    )}
                </View>

                {/* Right Main Content */}
                <View style={styles.main}>
                    <Text style={styles.sectionTitleMain}>{t.cvSections.profile}</Text>
                    <Text style={styles.mainText}>Profile section coming soon...</Text>

                    <Text style={styles.sectionTitleMain}>{t.cvSections.experience}</Text>
                    <Text style={styles.mainText}>Experience section coming soon...</Text>

                    <Text style={styles.sectionTitleMain}>{t.cvSections.education}</Text>
                    <Text style={styles.mainText}>Education section coming soon...</Text>
                </View>
            </Page>
        </Document>
    );
};

export default CVPdfDocument;
