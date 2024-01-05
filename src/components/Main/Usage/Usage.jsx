import { Container, Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { Assignment, GetApp, Edit, EmojiEvents, Help } from '@mui/icons-material';
import ArrowUp from '../../../assets/arrowUp.png';
import ArrowDown from '../../../assets/arrowDown.png';
import { useLocation } from 'react-router-dom';
import translations from './UsageTranslations'; // Import translations
import './Usage.css';

const Usage = () => {
  const location = useLocation();
  const currentLanguage = location.pathname.split('/')[1]; // Extract language from URL

  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: '#B0EACD', padding: '40px 0', textAlign: 'center', direction: 'rtl' }}
    >
      <Box
        sx={{ color: '#FD5E53', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}
      >
        <Help />
        <Typography variant="h5" sx={{ color: '#FD5E53' }}>
          {translations[currentLanguage].howToUse}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row-reverse' }}
        justifyContent="space-around"
        alignItems="center"
        mt={4}
      >
        <img className="firstArrow" alt="" srcSet={ArrowDown} width={'200px'} style={{ position: 'absolute', left: 300, top: 550 }} />
        <Card sx={{ width: 200, height: 300, borderRadius: 10, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', mb: 2, backgroundColor: '#F9FCFB' }}>
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: '#21BF73', mb: 2 }}>
              <Assignment />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              {translations[currentLanguage].discoverVariety}
            </Typography>
          </CardContent>
        </Card>
        <img alt="" srcSet={ArrowUp} width={'200px'} style={{ position: 'absolute', bottom: -230 }} />

        <Card
          sx={{ width: 200, height: 300, borderRadius: 10, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', mb: 2, mr: { xs: 0, md: 2 }, backgroundColor: '#FFC107' }}
        >
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: '#F9FCFB', mb: 2 }}>
              <GetApp />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              {translations[currentLanguage].downloadFormat}
            </Typography>
          </CardContent>
        </Card>
        <img alt="" srcSet={ArrowDown} width={'200px'} style={{ position: 'absolute', right: 300, top: 550 }} />

        <Card
          sx={{ width: 200, height: 300, borderRadius: 10, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', mb: 2, mr: { xs: 0, md: 2 }, backgroundColor: '#4CAF50' }}
        >
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: '#F9FCFB', mb: 2 }}>
              <Edit />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              {translations[currentLanguage].personalizeEdit}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 200, height: 300, borderRadius: 10, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#2196F3' }}>
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: '#F9FCFB', mb: 2 }}>
              <EmojiEvents />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              {translations[currentLanguage].achieveSuccess}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Usage;
