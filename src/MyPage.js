import {Redirect, Link} from "react-router-dom";

function MyPage(){
    function onClick(e){
      
        if(e.target.name === "profile"){
            return(
                <Redirect to="/profile"></Redirect>
            )
        }
       
    }

    return(
        <>
            <div name="profile" onClick={onClick}>
                <ul>
                    <li>국비위키 프로필</li>
                    <li><img src=""></img></li>
                    <li>프로필 사진</li>
                    <li>
                        고객님의 프로필을 수정하실수
                                있습니다.
                    </li>
                </ul>
            </div>

            <div name="modify">
                <ul>
                    <li>개인정보 변경</li>
                    <li><img src=""></img></li>
                    <li>개인정보 이미지</li>
                    <li>고객님의 개인정보를 수정하실 수 있습니다</li>
                </ul>
            </div>
            <div name="remove">
                <ul>
                    <li>회원 탈퇴</li>
                    <li><img src=""></img></li>
                    <li>탈퇴 이미지</li>
                    <li>사용하지 않는 국비위키ID를 
                          탈퇴 할 수 있습니다.</li>
                </ul>
            </div>
            <div name="passwordModify">
                <ul>
                    <li>비밀번호 변경</li>
                    <li><img src=""></img></li>
                    <li>비밀번호 이미지</li>
                    <li>추가적인 비밀번호 변경으로
                         ID를 안전하게 관리할 수
                              있습니다.</li>
                </ul>
            </div>
        </>
    );
}

export default MyPage;