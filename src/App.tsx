import { Stack } from "@mui/material";
import { ContactRegisterForm } from "./components/forms";
import { Header } from "./components/Header";
import { Main } from "./styles/base.styles";

function App() {
  return (
    <Main>
      <Header />
      <Stack mt={6} alignItems="center">
        <ContactRegisterForm />
      </Stack>
    </Main>
  );
}

export default App;
