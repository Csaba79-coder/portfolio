import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

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
    mainText: {
        fontSize: 12,
        lineHeight: 1.6,
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
                            {/* Note: Image component would go here if we want to support photos */}
                            {/* For now skipping photo in PDF */}
                        </View>
                    )}

                    <Text style={styles.name}>{name || "Your Name"}</Text>
                    <Text style={styles.jobTitle}>{jobTitle || "Job Title"}</Text>

                    {/* Contact Info */}
                    <View style={styles.contactSection}>
                        {email && <Text style={styles.contactItem}>✉️ {email}</Text>}
                        {phone && <Text style={styles.contactItem}>📞 {phone}</Text>}
                        {website && <Text style={styles.contactItem}>🌐 {website}</Text>}
                        {linkedin && <Text style={styles.contactItem}>💼 LinkedIn</Text>}
                        {location && <Text style={styles.contactItem}>📍 {location}</Text>}
                        {nationality && <Text style={styles.contactItem}>🏳️ {nationality}</Text>}
                        {drivingLicense && <Text style={styles.contactItem}>🚗 {drivingLicense}</Text>}
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
                            {languages.map((l, idx) => (
                                <View key={idx} style={styles.languageItem}>
                                    <Text>{l.language}</Text>
                                    {showLanguageLevels && (
                                        <Text style={{ fontSize: 9 }}>({l.level})</Text>
                                    )}
                                </View>
                            ))}
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
