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
		path: '/dashboard/addcategory',
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
		key: 'messages',
		label: 'Messages',
		path: '/dashboard/messages',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'contacts',
		label: 'Contacts',
		path: '/dashboard/contacts',
		icon: <HiPhone />

	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/dashboard/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/dashboard/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
