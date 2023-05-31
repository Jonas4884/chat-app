import { useRouter } from "next/router"

export const MainChannel = ()=>{
    const {push}= useRouter()
    return(
        <>
         <div className=" bg-light rounded-3 h-100 w-100" style={{height:"300px",width:"600px"}}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Sleek</h1>
        <p className="col-md-8 fs-4">Are you ready to dive into the world of productivity and collaboration? Join us on Slack, where the magic happens! 💫

Discover a vibrant community of like-minded individuals, all working towards their goals and supporting each other along the way. 🤝✨</p>
        <button className="btn btn-primary btn-lg" type="button" onClick={()=>{push("/channel/create")}}>Create new Channel</button>
      </div>
    </div>
        </>
    )
}