import { ScrollCards } from "../ScrollCards";

export function Departmentlayout({ ...props }) {
  console.log(props)
  return (
    <div className="department-container">
      <div className="department-page-banner">
        {/* <img
          src={department.department.cover}
          alt="brch-cover"
          className="department-page-banner-image"
        /> */}
      </div>
      {/* COVER IMAGE GOES HERE */}
      <div className="reset-padding">
        <div className="departments-page-description">
          <h4 className="departments-page-title">c</h4>
          <p className="departments-page-text">
            <b>ბათუმის რესპუბლიკური კლინიკური საავადმყოფო</b> -
            მულტიპლათფორმული, რეგიონში მოწინავე კლინიკა გათვლილია 220 საწოლზე.
            კლინიკა აღჭურვილია ულტრათანამედროვე აპარატურით, კომფორტული
            პალატებითა და საოპერაციო ბლოკებით. კლინიკა მუშაობს ხარისხის
            კონტროლის თანამედროვე ინდიკატორების გათვალისწინებით.
          </p>
          <p className="departments-page-text">
            <b>ხარისხი</b> - კლინიკაში მკურნალობა მიმდინარეობს უმაღლესი
            სტანდარტებით, ჯანდაცვის საერთაშორისო ორგანიზაციების
            რეკომენდაციების,დასავლური
            {`(ევროპული და ამერიკული)`} გაიდლაინებისა და პროტოკოლების
            გათვალისწინებით.
          </p>
        </div>
        <div className="department-doctors">
          <h3 className="department-doctors-title">ჩვენი ექიმები</h3>
          <div className="department-doctors-cards">
            {/* {db.mediCards.map(({ id, title, src }) => {
              return <ScrollCards key={id} id={id} title={"test"} src={src} />;
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}
