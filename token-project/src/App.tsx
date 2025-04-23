import './App.css'
import Stack from '@mui/material/Stack';
import MainButton from './button';

function App() {
  return (
    <>
      <h1>Button Token Test</h1>
      <Stack spacing={2} direction="row">
      <MainButton />
    </Stack>
    </>
  )
}

export default App
