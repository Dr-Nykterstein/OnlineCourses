import React from 'react';

import { CardView } from 'react-card-with-image';

import 'react-card-with-image/dist/index.css';
import './WhyUs.css';

function WhyUsExp() {
  const items = [
    {
      id: 1,
      header: <h2>What's the difference between a Double room and a Twin room?</h2>,
      description: 'A Double Room has one double bed and a Twin Room has 2 single beds. If a room is called Double/Twin, it can be set up for either type. The property will do its best to accommodate your needs.',
      image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/172/2019/03/01044402/P_625_1-edit-1.jpg"
    },
    {
      id: 2,
      header: <h2>I will be arriving outside check-in hours. Can I still check-in?</h2>,
      description: 'This depends on the property who will do their best to meet your needs, but cannot guarantee your request. You can do either of the following: Request an early or late check-in/check-out Contact the property',
      image: "https://www.peacequarters.com/wp-content/uploads/2017/10/graphicstock-late-business-man-in-glasses-on-the-street_SO3RIHDne.jpg"
    },
    {
      id: 3,
      header: <h2>Date change or cancellation during the Coronavirus pandemy</h2>,
      description: 'You chose a policy when you made a booking on our platform. If that policy allows a change of dates or a free cancellation, you are entitled to that. For bookings made before 6 April: You may be able to change or cancel your (non refundable) booking for free if you cannot travel to or stay at the property as a result of implications of the Coronavirus (COVID-19) outbreak, such as government travel restrictions (e.g. closed borders).',
      image: "https://framinghamsource.com/wp-content/uploads/2020/05/coronavirus.courtesy.orange.jpeg"
    },
    {
      id: 4,
      header: <h2>Will I pay the full price for my children?</h2>,
      description: "Additional costs for children, if any, are not included in the reservation price. Please check with the property directly to see if and when you'll pay for your child(ren).",
      image: "https://s7d2.scene7.com/is/image/ritzcarlton/50482243-Kids%20-%20Kids%20on%20Bed?$XlargeViewport100pct$"
    },
    {
      id: 5,
      header: <h2>Can I cancel or change my dates for a non-refundable booking?</h2>,
      description: 'Cancelling a Non-Refundable booking normally incurs a charge. However, you may have the  option to request free cancellation when managing your booking. This sends a request to  the property, who may decide to waive your cancellation fee. It is not possible to change  dates for a Non-Refundable booking, though it is possible to re-book for your desired dates  if your waive fees request is successful.',
      image: "https://www.gitomer.com/wp-content/uploads/2007/07/Happy_Receptionist.jpg"
    }
  ]

  return (
    <div className='whyus-container'>
      <h1>Popular questions</h1>

      <CardView
        items={items}
        activeColor='#000'
        imageHeight='470px'
        imageWidth='470px'
      />
      <img className="whyus-img" src="https://thumbs.dreamstime.com/b/benefits-text-black-yellow-vintage-lines-stamp-grungy-sign-207108385.jpg" />
      <div className="text">
        <p>
          EasyLogging is the most visited service of daily rental offers from owners in Ukraine.
          We started on July 1, 2009 as the “Cherdak” company, and we have earned a reputation as a
          leader, becoming the most visited site in the field of daily rental housing from owners in
          Ukraine.
        </p>
        <p>Our achivments:</p>
        <p className='list'><li>11 years on the market</li></p>
        <p className='list'><li>~ 40 thousand housing offers from owners</li></p>
        <p className='list'><li>offers from all over the world</li></p>
        <p className='list'><li>lots of positive reviews</li></p>
      </div>
      <img className="whyus-img" src="https://groupbuyseotools.org/wp-content/uploads/2019/07/reviews.jpg" />
      <div className="text">
        <p>
          We do not delete any guest reviews and do not write tens of thousands of our own, 
          therefore all information is as true as possible and reflects the real situation. We have 
          developed reliable anti-fraud algorithms. In addition, each offer additionally undergoes 
          manual moderation, minimizing your risks.
        </p>
        <p>
          Our life is diverse and sometimes even unpredictable. We always look to make it simpler and 
          more comfortable. To plan a business trip, rest, enchantingly celebrate a birthday or to 
          conduct exclusive photo and video shooting – all this is possible in a daily apartment and 
          we already have more than 40,000 of them.
        </p>
        <p>
          Basically, the issue of daily rent of apartments is relevant for city guests who are looking 
          for home comfort and coziness. In rental housing you can feel at home, do anything and not 
          depend on conditions.
        </p>
        <p>An apartment for rent is also a great way to save money. After all, the per day cost of...</p>
      </div>
    </div>
  );
}

export default WhyUsExp;
