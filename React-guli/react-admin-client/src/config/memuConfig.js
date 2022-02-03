const menuList = [{
        title: "首页",
        key: "/home",
        icon: "HomeOutlined"
    },
    {
        title: "商品",
        key: "/products",
        icon: "AppstoreOutlined",
        children: [{
                title: "品类管理",
                key: "/category",
                icon: "UnorderedListOutlined"
            },
            {
                title: "商品1",
                key: "/product1",
                icon: "ToolOutlined",
                children: [{
                    title: "商品管理",
                    key: "/product",
                    icon: "UnorderedListOutlined"
                },
            ]
            },
        ]
    },
    {
        title: "用户管理",
        key: "/user",
        icon: "UserOutlined"
    },
    {
        title: "角色管理",
        key: "/role",
        icon: "PieChartOutlined"
    },
    {
        title: "图形图表",
        key: "/charts",
        icon: "BarChartOutlined",
        children: [{
                title: "柱状图",
                key: "/charts/bar",
                icon: "PieChartOutlined"
            },
            {
                title: "折线图",
                key: "/charts/line",
                icon: "PieChartOutlined"
            },
            {
                title: "饼图",
                key: "/charts/pie",
                icon: "PieChartOutlined"
            }
        ]
    }
];

export default menuList;