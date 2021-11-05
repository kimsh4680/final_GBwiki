import {Link,Route} from "react-router-dom";
import MyPageList from "./components/MyPageList";

function MyPage({match}){


    return(
        <>
            <Route exact path={match.path} component={MyPageList}></Route>
        </>
    );
}

export default MyPage;