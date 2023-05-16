import { Layout } from "@/common/components";
import AppBar from "@/common/components/channel/appBar";
import { Channel } from "@/common/types";
import { channelProvider } from "@/providers/channel-provider";
import { userRequest } from "@/providers/utils";
import { log } from "console";
import { GetServerSideProps } from "next";

interface ChannelListResolover{
  channels : Channel[]
}

const ChatRoom = (data:ChannelListResolover) => {
  const channelList = data;
  return (
    <Layout>
      <AppBar />
      <section className="main__section">
  <div className="container py-5">

    <div className="row">
      <div className="col-md-12">

        <div className="card content__section" id="chat3" >
          <div className="card-body">

            <div className="row">
              <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">

                <div className="p-3">

                  <div className="input-group rounded mb-3">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                      aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                      <i className="fas fa-search"></i>
                    </span>
                  </div>

                  <div data-mdb-perfect-scrollbar="true" className="scroll__section">
                  <>
                  <p className="text-red-500">
                  {
                                
                                `data is :${JSON.stringify(data)}`   
                                }
                  </p>
                          
                            </>
                   
                  </div>

                </div>

              </div>

              <div className="col-md-6 col-lg-7 col-xl-8">

                <div className="pt-3 pe-3 chat__scroll__section" data-mdb-perfect-scrollbar="true"
                 >

                  <div className="d-flex flex-row justify-content-start">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1" className="sidebar__chat__img"/>
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3 main__chat__content" >Lorem ipsum
                        dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore
                        magna aliqua.</p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                    </div>
                  </div>

                  <div className="d-flex flex-row justify-content-end">
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minim veniam,
                        quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1" className="sidebar__chat__img" />
                  </div>

                  <div className="d-flex flex-row justify-content-start">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1"className="sidebar__chat__img"/>
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3 main__chat__content" >Duis aute
                        irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                    </div>
                  </div>

                  <div className="d-flex flex-row justify-content-end">
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Excepteur sint occaecat
                        cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1" className="sidebar__chat__img" />
                  </div>

                  <div className="d-flex flex-row justify-content-start">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1" className="sidebar__chat__img"/>
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3 main__chat__content" >Sed ut
                        perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta
                        sunt explicabo.</p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                    </div>
                  </div>

                  <div className="d-flex flex-row justify-content-end">
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Nemo enim ipsam
                        voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                        qui
                        ratione voluptatem sequi nesciunt.</p>
                      <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1" className="sidebar__chat__img"/>
                  </div>

                  <div className="d-flex flex-row justify-content-start">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1" className="sidebar__chat__img" />
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3 main__chat__content" >Neque porro
                        quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                        numquam
                        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                    </div>
                  </div>

                  <div className="d-flex flex-row justify-content-end">
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minima veniam,
                        quis
                        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                        commodi
                        consequatur?</p>
                      <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1" className="sidebar__chat__img"/>
                  </div>

                </div>

                <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 3" className="sidebar__chat__img"/>
                  <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                    placeholder="Type message"/>
                  <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
                  <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
                  <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>
    </Layout>
  )
}
 export const getServerSideProps:GetServerSideProps = async(context)=> {
  const res = await channelProvider.getAllChannel() as any
 const value = res.data.channels;
  
  return { props: { value } };
}
export default ChatRoom;