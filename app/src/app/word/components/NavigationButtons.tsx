import { Box, Button } from "@mui/material";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function NavigationButtons({ onPrev, onNext }: NavigationButtonsProps) {
  return (
    <Box display="flex" justifyContent="space-between" mt={2}>
      <Button variant="outlined" onClick={onPrev}>
        Voltar
      </Button>
      <Button variant="outlined" onClick={onNext}>
        Próximo
      </Button>
    </Box>
  );
}
