import '../../Styling/Home.css';
import office from '../../Media/office.jpg';

const Section1 = () => {
  return (
    <section className="home_section1">
      <div className="home_section1_text">
        <h2>Justo petentium te vix, scripta regione urbanitas</h2>
        <p>
          Populo factam no dolor doleniti deseruisse necum, nam quodsi aliquam
          eligendi ne: Ferri eu accuatate nec, summo accumsan at vi s legere
          inperut, nam consequat forms No sitcomuage voluptatibus, omniumluctus
          metarecteu detset sedanec odio option, fem assum eum o
        </p>
        <ul>
          <li>Te pefficienti assuever, it molestle suavitate per</li>
          <li>
            Te nam dolorem rationibus repudiandan, ne lus fallaluip consetetur
          </li>
          <li>Ut qui dicant copiosaeinterpretaris </li>
          <li>
            Ut indoctum patrioque voluptaria duo. ut vis semper abhorreant
          </li>
        </ul>
        <button>Learn more</button>
      </div>

      <img
        className="home_section1_image"
        src={office}
        alt="a colourful, empty office space with high wooden ceiling and large windows"
      ></img>
    </section>
  );
};

export default Section1;
