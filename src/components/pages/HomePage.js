import "./css/HomePage.css";

const HomePage = () => {
  return (
    <div className="main-container">
      <header>
        <h1>Welcome to Pet watch</h1>
        <p>Find Lost Pets and Reunite Them with Their Families</p>
        <button>Get Started</button>
      </header>
      <div className="section1">
        <h2>Lost a beloved pet?</h2>
        <p>
          We understand how distressing it can be when a furry friend goes
          missing. Pet Watch is here to help you in your search and bring them
          back home. Our dedicated platform connects pet owners, animal lovers,
          and communities, working together to ensure that no pet stays lost for
          long.
        </p>
      </div>
      <div className="section2">
        <img src="https://hips.hearstapps.com/hmg-prod/images/funny-dog-captions-1563456605.jpg?crop=0.748xw:1.00xh;0.0897xw,0&resize=980:*"></img>
        <div className="section2-text">
          <h2>Find Your Lost Companion</h2>
          <p>
            Losing a pet can feel overwhelming, but you're not alone. With Pet
            Watch, you have a powerful tool at your fingertips to aid in the
            search. Our intuitive search functionality allows you to browse
            through the listings of lost pets, filter by location, and view
            detailed profiles with photos and descriptions. Together, we can
            increase the chances of reuniting pets with their loving families.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="section3">
        <div className="section3-text">
        <h2>Post a Lost Pet</h2>
        <p>
          If you've found yourself in the heart-wrenching situation of losing a
          pet, don't worry. Creating a listing on Pet Watch is quick and easy.
          Share essential details about your furry friend, such as their breed,
          color, and any distinct markings. Upload a clear photo to help others
          identify them. The more information you provide, the better the
          chances of a successful reunion.
        </p>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/1227/0278/files/Orange_and_white_tabby_cat_with_the_impressive_tail-Hisashi-01A_293e865c-eb4e-408b-abfa-7c5696038da5_large.jpg?v=1556230105"></img>
      </div>
      <div className="section4">
        <h2>Help Us Bring Pets Home</h2>
        <p>
          You don't need to be a pet owner to make a difference. Pet Watcher
          encourages everyone to lend a hand in reuniting lost pets with their
          families. By staying informed and spreading the word about missing
          pets in your area, you can become a vital part of our compassionate
          community. Together, we can provide hope, support, and love to those
          who need it the most.
        </p>
      </div>
      <div className="section5">
        <div className="text5">
          <h2>Get Involved Today</h2>
          <p>
            Join the Pet Watch community and make a meaningful impact in the
            lives of both pets and their owners. Whether you're searching for
            your own lost companion or eager to assist others in their quest,
            our platform offers the resources and connections you need. Let's
            work together to bring smiles and wagging tails back to where they
            belong.
            <button>Get in Touch</button>
          </p>
        </div>
        <img src="https://www.americanhumane.org/app/uploads/2016/08/shutterstock_162633491.jpg"></img>
      </div>

      <footer></footer>
    </div>
  );
};

export default HomePage;
