import { ScrollCards } from "../ScrollCards";
import cover from "../../assets/about.png";
import db from "../../mocks/db.json";
import "./style.css";

export function AboutPage() {
  return (
    <div className="about-page-container">
      <div className="about-page-banner">
        <img src={cover} alt="brch-cover" className="about-page-banner-image" />
      </div>
      <div className="reset-padding">
        <div className="about-page-description">
          <h4 className="about-page-description-title">ჩვენს შესახებ</h4>
          <p className="about-page-description-text">
            <b>ბათუმის რესპუბლიკური კლინიკური საავადმყოფო</b> -
            მულტიპლათფორმული, რეგიონში მოწინავე კლინიკა გათვლილია 220 საწოლზე.
            კლინიკა აღჭურვილია ულტრათანამედროვე აპარატურით, კომფორტული
            პალატებითა და საოპერაციო ბლოკებით. კლინიკა მუშაობს ხარისხის
            კონტროლის თანამედროვე ინდიკატორების გათვალისწინებით.
          </p>
          <p className="about-page-description-text">
            <b>ხარისხი</b> - კლინიკაში მკურნალობა მიმდინარეობს უმაღლესი
            სტანდარტებით, ჯანდაცვის საერთაშორისო ორგანიზაციების
            რეკომენდაციების,დასავლური
            {`(ევროპული და ამერიკული)`} გაიდლაინებისა და პროტოკოლების
            გათვალისწინებით.
          </p>
          <p className="about-page-description-text">
            <b>პროფესიონალიზმი</b> - პასუხისმგებლობა, საქმისადმი ერთგულება და
            მაქსიმალური თავდადება - ამ პრინციპით მუშაობს ჩვენი გუნდის თითოეული
            წევრი
          </p>
          <p className="about-page-description-text">
            <b>პაციენტის უსაფრთხოება</b> - პაციენტების და ლაბორატორიული
            ანალიზების იდენტიფიკაციის პროცესი, უსაფრთხო ქირურგიის პროტოკოლი,
            მედიკამენტების მიმოქცევის და გამოყენების კონტროლის პროცედურა
          </p>
        </div>
        <div className="medical-services">
          <h3 className="medical-services-title">სამედიცინო მომსახურება</h3>
          <div className="medical-services-cards">
            {db.departments.map(({ id, title, src }) => {
              return (
                <ScrollCards
                  key={id}
                  id={id}
                  title={title}
                  src={src}
                  route={`/department/${id}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
