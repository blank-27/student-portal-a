import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex flex-col overflow-hidden">
        {/*  Page content */}
        <div className="dashboardTpo__section">
          <main className="dashboardTpo__container flex-grow">
            <div className="dashboardTpo__cunt">
              <div className="dashboardTpo__notif">
                <h3 className="notificationTpo__heading">Notifications</h3>
                {/* <NotificationTpo /> */}
                <ul>
                  <li>
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostr
                  </li>
                  <li>
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostr
                  </li>
                  <li>
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostr
                  </li>
                </ul>
              </div>
              <div className="dashboardTpo__approve">
                <h3 className="notificationTpo__heading">Approve Students</h3>
                {/* <ApproveStudents /> */}
                <ul>
                  <li>
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostr
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Dashboard;
