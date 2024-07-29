import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = {firstName: 'Tedros', lastName: 'Kidane', email: 'tedydada@gmail.com'}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
               <HeaderBox 
               type="greeting"
               title="Welcome"
               user={loggedIn?.firstName || "Guest"}
               subtext="Access and manage your account and transactions efficiently."
               />
               <TotalBalanceBox 
               accounts={[]}
               totalBanks={1}
               totalCurrentBalance={1250.35}
               />
            </header>

            Recent Transactions
        </div>

        <RightSideBar 
          user={loggedIn}
          transactions = {[]}
          banks={[{currentBalance:123.50},{currentBalance:0}]}
        />
    </section>
  )
}

export default Home