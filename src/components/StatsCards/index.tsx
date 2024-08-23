import {
  Amount,
  Icon,
  IncomeCard,
  Label,
  Container,

} from "@/styles/Metrics/StatsCards";
import { StatsProps } from "@/interfaces/components/StatsCard";
export const StatsCards = ({count,children,label,icon,bgColor}:StatsProps) => {

  return (

        <Container>
        <IncomeCard $bgColor={bgColor ?? "linear-gradient(to right, #4fd1c9, #38b2ac)"}>
          <Amount>{count}</Amount>
          <Label>{label}</Label>
          {children}
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {icon}
          </Icon>
        </IncomeCard>
        </Container>
  );
};
