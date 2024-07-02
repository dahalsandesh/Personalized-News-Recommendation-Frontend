import React from 'react'

import RecentNews from '../Stats/RecentNews'
import BuyerProfilePieChart from '../Stats/CategoryPieChart'
import PopularNews from '../Stats/PopularNews'
import DashboardStatsGrid from '../Stats/DashboardStatsGrid'

export default function DashboardHome() {
	return (
        <>
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			
			<div className="flex flex-row gap-4 w-full">
			
			</div>
		</div>
        </>
	)
}

