import { Container, Button } from "react-bootstrap";

export function HomeTitle() {
  return (
    <Container className="advert-title-container">
      <h1 className="advert-title">
        რატომ ვირჩევთ ბათუმის რესპუბლიკურ კლინიკურ საავადმყოფოს?
      </h1>
      <Button
        className="submit-button mt-3"
        variant="primary"
        type="submit"
        onClick={() => alert("ვებ-გვერდი მუშაობს საცდელ რეჟიმში!")}
      >
        გაიგე მეტი
      </Button>
    </Container>
  );
}
