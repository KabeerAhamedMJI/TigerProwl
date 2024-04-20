import './App.css';
import Articles from './components/Articles';
import Header from './components/Header1';
import Main2 from './components/Main2';

function App() {
  const ArticleTags = [
    {
      id: 1,
      ArtImage: "https://tigerprowl-tiger-reserve.vercel.app/images/Blogs/tiger_1.jpg",
      title: "Inside the Lives of Tigers in Their Natural Habitat",
      para: "Delve into the mysterious world of tigers in their natural habitat, uncovering secrets and stories that illuminate the beauty of these magnificent creatures.",
    },
    {
      id: 2,
      ArtImage: "https://tigerprowl-tiger-reserve.vercel.app/images/Blogs/tiger_2.jpg",
      title: "Tiger Population Trends and Conservation",
      para: "Discover the latest conservation efforts in tiger reserves, highlighting successes and challenges faced in safeguarding these majestic creatures and their habitats.",
    },
    {
      id: 3,
      ArtImage: "https://tigerprowl-tiger-reserve.vercel.app/images/Blogs/tiger_3.jpg",
      title: "Understanding the Dynamics of Tiger-Human Conflict",
      para: "Unlock the secrets of tiger behavior in their natural habitat, unraveling tales of survival, adaptation, and the delicate balance of ecosystems.",
    },
    {
      id: 4,
      ArtImage: "https://tigerprowl-tiger-reserve.vercel.app/images/Blogs/tiger_4.jpg",
      title: "Celebrating Conservation Milestones in Tiger Reserves",
      para: "Discover the wonders of tiger reserves, where nature's beauty thrives. Learn about the importance of conservation and join the effort to protect these magnificent creatures.",
    },
    {
      id: 5,
      ArtImage: "https://tigerprowl-tiger-reserve.vercel.app/images/Blogs/tiger_5.jpg",
      title: "Responsible Wildlife Photography in Tiger",
      para: "Discover the wonders of tiger reserves, where nature's beauty thrives. Learn about the importance of conservation and join the effort to protect these magnificent creatures.",
    },
    {
      id: 6,
      ArtImage: "https://tigerprowl-tiger-reserve.vercel.app/images/Blogs/tiger_6.jpg",
      title: "Technologies Used in Conservation Efforts",
      para: "Embark on a journey through tiger reserves, witnessing the splendor of nature and the critical conservation efforts aimed at preserving these iconic species.",
    },
    {
      id: 7,
      ArtImage: "https://tigerprowl-tiger-reserve.vercel.app/images/Blogs/tiger_7.jpg",
      title: "Engagement in Tiger Reserve Conservation",
      para: "Explore the rich biodiversity of tiger reserves, where the wilderness thrives. Join us in our mission to protect and preserve these precious ecosystems.",
    },
    {
      id: 8,
      ArtImage: "https://tigerprowl-tiger-reserve.vercel.app/images/Blogs/tiger_8.jpg",
      title: "Success Stories and Future Endeavors",
      para: "Embark on a journey through tiger reserves, where the wilderness thrives. Discover the importance of conservation efforts in protecting these magnificent creatures and their habitats.",
    },
  ];

  const ArticlesList = ArticleTags.map(article => (
    <Articles key={article.id} article={article} />
  ));

  return (
    <>
      <Header />
      <Main2 />
      <div className="container">
        <div id="BlogPost">
          {ArticlesList}
        </div>
      </div>
    </>
  );
}

export default App;
