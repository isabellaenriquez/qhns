import './meetTheTeam.css';
import Exec from '../components/Exec';
import Juliana from '../assets/headshots/juliana.jpg';
import Megan from '../assets/headshots/megan.jpg';
import Xinye from '../assets/headshots/xinye.jpg';
import Emma from '../assets/headshots/emma.jpg';
import Ali from '../assets/headshots/ali.jpg';
import Olivia from '../assets/headshots/olivia.jpg';
import Kathryn from '../assets/headshots/kathryn.jpg';
import Allison from '../assets/headshots/allison.jpg';
import Isabella from '../assets/headshots/isabella.jpeg';
import Bridgett from '../assets/headshots/bridgett.jpg';
import Priya from '../assets/headshots/priya.jpg';
import Maddy from '../assets/headshots/maddy.jpg';
import Jordyn from '../assets/headshots/jordyn.png';
import Rachel from '../assets/headshots/rachel.jpg';
import Justus from '../assets/headshots/justus.png';

export default function MeetTheTeam() {
  return (
    <main id='meet-the-team'>
      <h1>Meet the Team</h1>
      <p>
        Who we are, what we do (as part of QHNS and as students), and our
        favourite healthy snacks!
      </p>
      <div className='execs'>
        <div className='two-col-grid'>
          <Exec
            img={Juliana}
            name='Juliana Fernandes'
            title='Co-President'
            program='Fourth Year Kinesiology'
            snack='Yogurt, Chocolate Granola, and Strawberries'
          />
          <Exec
            img={Megan}
            name='Megan Miller'
            title='Co-President'
            program='Fourth Year Health Studies and Sociology'
            snack='Frozen Grapes'
          />
          <Exec
            img={Xinye}
            name='Xinye Lu'
            title='Director of Logistics'
            program='Second Year Health Sciences'
            snack='Apple Brownie Bites'
          />
          <Exec
            img={Emma}
            name='Emma Epstein'
            title='Director of Social Media'
            program='Second Year Film and Media + Minor in Health Studies'
            snack='Homemade Protein Balls'
          />
          <Exec
            img={Ali}
            name='Alexandra Romain'
            title='Social Media Coordinator (Podcast)'
            program='Third Year Engineering Chemistry + Certificate in Business'
            snack='Fresh Mango'
          />
          <Exec
            img={Olivia}
            name='Olivia Pelletier'
            title='Social Media Coordinator'
            program='Fourth Year Life Sciences'
            snack='Berries and Almond Butter'
          />
          <Exec
            img={Kathryn}
            name='Kathryn Green'
            title='Social Media Coordinator'
            program='Fourth Year Health Studies'
            snack='Hummus, Crackers, and Carrots'
          />
          <Exec
            img={Allison}
            name='Allison Souter'
            title='Social Media Coordinator'
            program='Fifth Year Life Sciences'
            snack='Chips, Guac, and Salsa'
          />
          <Exec
            img={Isabella}
            name='Isabella Enriquez'
            title='IT Specialist'
            program='Third Year Software Design'
            snack='Banana Pancakes'
          />
          <Exec
            img={Bridgett}
            name='Bridgett Chau'
            title='Events and Fundraising Coordinator'
            program='Second Year Kinesiology'
            snack='Frozen Berries with Almond Butter and Cacao Nibs'
          />
          <Exec
            img={Priya}
            name='Priya Mistry'
            title='Events Coordinator'
            program='Second Year Health Studies + Minor in Psychology'
            snack='Smoothies'
          />
          <Exec
            img={Maddy}
            name='Maddy Hykamp'
            title='Director of Sponsorships'
            program='Second Year Health Studies + Minor in Employee Relations'
            snack='Greek Yogurt with Frozen Berries and Peanut Butter'
          />
          <Exec
            img={Jordyn}
            name='Jordyn Leerentveld'
            title='Second Year Representative'
            program='Second Year Life Sciences'
            snack='Carrots and Hummus'
          />
          <Exec
            img={Rachel}
            name='Rachel Fox'
            title='Director of Events and Fundraising'
            program='Fourth Year Sociology'
            snack='Nomz Protein Balls'
          />
          <Exec
            img={Justus}
            name='Justus Vasilakos Mcrae'
            title='Director of External Affairs'
            program='Third Year Psychology + Minor in Health Studies'
            snack='Greek Yogurt, Protein Powder, Cinnamon, Blueberries, and Granola'
          />
        </div>
      </div>
    </main>
  );
}
