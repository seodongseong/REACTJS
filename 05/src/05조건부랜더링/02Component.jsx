

const Component_02 = ({isAuth})=>{

    // return (
    //     <div>
    //         {isAuth? 
    //             (
    //                 <>
    //                     <p>로그인 완료</p>
    //                     <p>환영합니다.</p>
    //                 </>
    //             ) : 
    //             (
    //                 <>
    //                     <p>로그인 실패</p>
    //                     <p>로그인을 하세요</p>
    //                 </>
    //             )
                
    //             }
    //     </div>
    // )
    return isAuth?<p>로그인확인</p> : <p>로그인실패</p>
}
    


export default Component_02














