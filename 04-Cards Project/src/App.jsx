import Card from './components/Card'


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bmSluOGyhYjKIVtBXon2imXvS_zt17D36n53kMzxog&s",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-U2QiK6dp7xhwf1l8VJx7cEzki0ALxwt0Q&s",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPzHXKA04yf_-hwhqCto8dl56iddYeksWAUeaSg3BKQ&s",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "iOS App Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaTGBp3HtzQmqv9bU_-oaIvbTpQ1QjdQ4ZZx-GZlmTg&s",
      companyName: "Netflix",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
      companyName: "Google",
      datePosted: "4 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$50/hr",
      location: "Gurgaon, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xUmQ66-2D5cLQVjh8Ez8-nTBF5NPJPoRMzFhBm_BZw&s",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Cloud Solutions Developer",
      tag1: "Hybrid",
      tag2: "Senior Level",
      pay: "$58/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_BBpq_FzbwglAHPOKF5444gMs-oXUAnOPZSeeMJdmw&s",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/32/2/tesla-logo-png_seeklogo-329764.png",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Automation Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$62/hr",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      post: "Creative Frontend Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$38/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$46/hr",
      location: "Hyderabad, India"
    }
  ];

  console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){  
        return <div key={idx}>
          <Card logo={elem.brandLogo} company={elem.companyName} post={elem.post} dateOfPosting={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div> 
      })}
    </div>
  )
}

export default App