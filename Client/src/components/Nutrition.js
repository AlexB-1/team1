import React from "react";
import foodImage from "../images/wholefoodpic.jpg";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

const Nutrition = props => {
  return (
    <Container>
      <div>
        <h1>Nutrition</h1>
        <hr />
        <h4>What to eat?</h4>
        <br />

        <p>
          {" "}
          A whole food diet comprised of fresh meat, poultry, fish, vegetables,
          fruits, whole grains, nuts and seeds is best. If tolerable, whole milk
          and eggs are benefical.
        </p>
        <p>
          {" "}
          These foods provide the necessary nutrition required to build both
          strength and muscle.
        </p>

        <div className="foodImage">
          <img src={foodImage} alt="foodImage" />
        </div>

        <p>
          <b>
            <br />
            Top Five Supplements:
          </b>
        </p>
        <ol>
          <li>Whey Protein Powder</li>
          <li>Creatine Monohydrate</li>
          <li>BCAA Powder</li>
          <li>Omega Essential Oils</li>
          <li>Multivitamin</li>
        </ol>

        <p>
          <b>Energy macronutrients</b>
          <br />
          Energy macronutrients provide energy, which is measured either in
          kilocalories (kcal or calories) or Joules. 1 kilocalorie (calorie) =
          4185.8 joules. Energy macronutrients include:
          <br />
          <br />
          <b>Carbohydrates - 4 kcal per gram</b>
          <br />
          Carbohydrate molecules include monosaccharides (glucose, fructose,
          galactose), disaccharides, and polysaccharides (starch).
          <br />
          Nutritionally, polysaccharides are favored over monosaccharides
          because they are more complex and therefore take longer to break down
          and be absorbed into the bloodstream; this means that they do not
          cause major spikes in blood sugar levels, which are linked to heart
          and vascular diseases.
          <br />
          <br />
          <b>Proteins - 4 kcal per gram</b>
          <br />
          There are 20 amino acids - organic compounds found in nature that
          combine to form proteins. Some amino acids are essential, meaning they
          need to be consumed. Other amino acids are non-essential because the
          body can make them.
          <br />
          <br />
          <b>Fats - 9 kcal per gram</b>
          <br />
          Fats are triglycerides - three molecules of fatty acid combined with a
          molecule of the alcohol glycerol. Fatty acids are simple compounds
          (monomers) while triglycerides are complex molecules (polymers).
          <br />
          Fats are required in the diet for health as they serve many functions,
          including lubricating joints, helping organs produce hormones,
          assisting in absorption of certain vitamins, reducing inflammation,
          and preserving brain health.
        </p>
      </div>
    </Container>
  );
};

export default Nutrition;
