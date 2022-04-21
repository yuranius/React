import scss from "./CenterPanel.module.scss";
import Slide from "./Slider/Slider";
import CreatePost from "./CreatePosts/CreatePosts";
import ViewPost from "./ViewPosts/ViewPosts";

let CenterPanel = (props) => {



   let postsElements = props.posts.map((p) => (
      <ViewPost key={p.id} postview={p.postview} postimage={p.postimage} />
   ));

   return (
      <div className={scss.centerpanel}>
         <Slide />
         <CreatePost addPost={props.addPost}/>
         { postsElements }
      </div>
   );
};

export default CenterPanel;
