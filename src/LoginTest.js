import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Redirect, useLocation } from 'react-router';
const {naver} = window;
  


export default function LoginTest(){
    const [user,setUser] = useState({});
    const [loginCheck,setLoginCheck] = useState(false);
    const location = useLocation();

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
          clientId:"11GFRk_SJiZVzSpToWr01V",
          callbackUrl:"http://localhost:3000/#/", 
          isPopup: false, // popup 형식으로 띄울것인지 설정
          loginButton: { color: 'green', type: 3, height: '30' }, //버튼의 스타일, 타입, 크기를 지정
        });
        naverLogin.init();
    };
    
    const getNaverToken = () => {
        if (!location.hash) return;
        const token = location.hash.split('=')[1].split('&')[0];
        console.log(token);
    };

    function onChange(e){
        const name = e.target.name;
        if(name === "id"){
            setUser({...user,userId:e.target.value});
        }else if(name === "password"){
            setUser({...user,userPassword:e.target.value});
        }
    }

    function onSubmit(e){
        e.preventDefault();
        axios.post(`http://localhost:8081/user/login`,user)
        .then(function(response){
            console.log('성공');
            if(response.data.userId !== ""){
                window.sessionStorage.setItem("user", JSON.stringify(response.data));
                setLoginCheck(!loginCheck);
            }else{
                alert("로그인 실패")
            }
        })
        .catch(function(error){
            console.log('실패');
        });
      }

      useEffect(()=>{
        console.log("useEffect실행");
        initializeNaverLogin();
        getNaverToken();
      },[]);

    return(
        <>    
            {
                sessionStorage.getItem("user") !== null ? 
                <Redirect to="/"></Redirect>
                :
                <div>
                    <h1>로그인 페이지</h1>
                    <form onSubmit={onSubmit}> 
                        아이디
                        <input type = "text" name="id" onChange={onChange}></input><br/>
                        비밀번호
                        <input type = "password" name="password" onChange={onChange}></input>
                        <input type="submit" value="로그인"></input>
                    </form>
                    <div id="naverIdLogin"></div>
                </div>
            }
        </>
    );
}