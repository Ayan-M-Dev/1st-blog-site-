import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div>
      <Header />
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">About the Author: Retr0</h1>
          <div className="blog-subcontents">
          </div>
          <img src="./img/header2.jpg" className="hero-image" alt="" />
          <div className="blog-content">
            <p className="blog-text">Retr0 always had a keen interest towards coding. He came across many fields but one field which was really popular was web development. Luckily he had a laptop when he just started coding so he started with the basics of HTML & CSS and made his first landing page. As the days passed by, new technologies emerged and made development more and more easier. Finally he started to enjoy, learning all these new technologies regrading web development and wants to make it as his career option.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AuthorPage;