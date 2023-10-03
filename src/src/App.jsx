import { Outlet } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import { Box } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <MainLayout>
      <Box sx={{ margin: { sm: "10px 30px", lg: "20px" } }}>
        <Outlet />
      </Box>
      <ToastContainer position='bottom-right' theme="dark" rtl />
    </MainLayout>
  )
}

export default App