import {
	HiOutlineViewGrid,
	HiOutlineUserAdd,
	HiCloudUpload,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiPhone,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'DashboardHome',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: ' Users',
		label: 'Users',
		path: '/dashboard/news',
		icon: <HiOutlineUsers />
	},
	{
		key: 'Addusers',
		label: 'Add users',
		path: '/dashboard/addusers',
		icon:  <HiOutlineUserAdd />
	},
	{
		key: 'AddCategory',
		label: 'Add Category',
		path: '/dashboard/editcategory',
		icon:  <HiOutlineDocumentText />
	},
	{
		key: 'Addpost',
		label: 'Add post',
		path: '/dashboard/addposts',
		icon: <HiCloudUpload />
	},
	{
		key: 'Add User',
		label: 'Add User	',
		path: '/dashboard/adduser',
		icon: <HiOutlineDocumentText />
	},
	
	{
		key: 'logout',
		label: 'Logout',
		path: '/dashboard/logout',
		icon: <HiOutlineAnnotation />

	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [

]
