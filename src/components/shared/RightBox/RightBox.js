import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const RightBox = styled(Box)(({ theme }) => ({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    padding: '0'
  }
}))