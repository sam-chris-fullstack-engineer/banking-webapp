'use client';
import Headerbox from "@/components/Headerbox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Sam", lastName:"Christopher", email:"samchristopher235@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
          accounts={[]} 
          totalBanks={1}
          totalCurrentBalance={1250.35} />
          
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.70}, {currentBalance:250.70}]}
      />
    </section>
  );
};

export default Home;
