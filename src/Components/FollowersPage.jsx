// FollowersPage.jsx
import React from 'react';
import "../assets/Followers.css"

const FollowersPage = () => {
  return (
    <div className="container-fluid p-3" style={{background:"#efefef"}} >
    <div className="container bg-light" style={{marginTop:"5vh",borderRadius:"10px"}} >
      <div className="profile">
        <div className="profile-header">
          <div className="profile-header-cover"></div>
          <div className="profile-header-content">
            <div className="profile-header-img">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
            </div>
            <ul className="profile-header-tab nav nav-tabs nav-tabs-v2">
             
              <li className="nav-item">
                <a href="#profile-followers" className="nav-link active" data-toggle="tab">
                  <div className="nav-field">Followers</div>
                  <div className="nav-value">1.3m</div>
                </a>
             
              </li>
              
              <li className="nav-item">
                <a href="#profile-followers" className="nav-link" data-toggle="tab">
                  <div className="nav-field">Following</div>
                  <div className="nav-value">2,592</div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-sidebar">
            <div className="desktop-sticky-top">
              <h4>John Smith</h4>
              <div className="font-weight-600 mb-3 text-muted mt-n2">@johnsmith</div>
              <p>
                Principal UXUI Design &amp; Brand Architecture for Studio. Creator of SeanTheme. Bringing the world closer together. Studied Computer Science and Psychology at Harvard University.
              </p>
              <div className="mb-1"><i className="fa fa-map-marker-alt fa-fw text-muted"></i> New York, NY</div>
              <div className="mb-3"><i className="fa fa-link fa-fw text-muted"></i> seantheme.com/studio</div>
              <hr className="mt-4 mb-4" />
            </div>
          </div>

          <div className="profile-content">
            <div className="row">
              <div className="col-md-12">
                <div className="tab-content p-0">
                  <div className="tab-pane fade active show" id="profile-followers">
                    <div className="list-group">
                      {[
                        { name: 'Ethel Wilkes', location: 'North Raundspic', imgSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
                        { name: 'Shanaya Hansen', location: 'North Raundspic', imgSrc: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
                        { name: 'James Allman', location: 'North Raundspic', imgSrc: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
                        { name: 'Marie Welsh', location: 'Crencheporford', imgSrc: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
                        { name: 'Lamar Kirkland', location: 'Prince Ewoodswan', imgSrc: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
                        { name: 'Bentley Osborne', location: 'Red Suvern', imgSrc: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
                        { name: 'Ollie Goulding', location: 'Doa', imgSrc: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
                        { name: 'Hiba Calvert', location: 'Stemunds', imgSrc: 'https://bootdey.com/img/Content/avatar/avatar8.png' },
                        { name: 'Rivka Redfern', location: 'Fallnee', imgSrc: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
                        { name: 'Roshni Fernandez', location: 'Mount Lerdo', imgSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png' }
                      ].map((follower, index) => (
                        <div className="list-group-item d-flex align-items-center" key={index}>
                          <img src={follower.imgSrc} alt="" width="50px" className="rounded-sm ml-n2" />
                          <div className="flex-fill pl-3 pr-3">
                            <div><a href="#" className="text-dark font-weight-600">{follower.name}</a></div>
                            <div className="text-muted fs-13px">{follower.location}</div>
                          </div>
                          <a href="#" className="btn btn-outline-primary">Follow</a>
                        </div>
                      ))}
                      <div className="text-center p-3">
                        <a href="#" className="text-dark text-decoration-none">Show more <b className="caret"></b></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FollowersPage;
