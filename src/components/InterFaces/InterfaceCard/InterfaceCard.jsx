/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const InterfaceCard = ({ id, title, language }) => {
  const { pathname } = useLocation();
  const currentLangParam = pathname.split('/')[1];

  return (
    <Link component={RouterLink} to={`/${currentLangParam}/interfaces/${id}`} underline="none">
      <Card
        sx={{
          borderRadius: 8,
          height: '100%',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          border: '2px solid #21BF73',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          '&:hover': {
            borderColor: '#21BF73',
            boxShadow: '0 0 10px rgba(33, 191, 115, 0.8)',
            '& .text-block': {
              opacity: 1,
            },
          },
        }}
      >
        <Box
          component="img"
          alt={title}
          src={`https://via.placeholder.com/200x300?text=${title}`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 8,
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
        <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
          <Box
            className="text-block"
            sx={{
              color: '#21BF73',
              padding: '10px',
              borderRadius: 8,
              opacity: 0,
              transition: 'opacity 0.3s',
              backgroundColor: 'rgba(33, 191, 115, 0.8)',
              textAlign: 'right', // Adjusted text alignment
            }}
          >
            <Typography variant="h6" color="#F9FCFB">
              {title}
            </Typography>
            <Typography variant="subtitle2" color="#F9FCFB">
              اللغة: {language}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InterfaceCard;
