export const MockupState = {
    eventTypeList: [
        {
            type_code: "AGENT",
            type_name: "AGENT"
        },
        {
            type_code: "DB",
            type_name: "DB"
        },
        {
            type_code: "LOGGATHER",
            type_name: "LOGGATHER"
        },
        {
            type_code: "SYSLOG",
            type_name: "SYSLOG"
        },
        {
            type_code: "access_log",
            type_name: "[관리] 접근 로그"
        }
    ],
    eventFieldList: [
        {
            field_name: "Action",
            field_label: "허용 / 차단"
        },
        {
            field_name: "ActualFree",
            field_label: "ActualFree"
        },
        {
            field_name: "ApplicationTitle",
            field_label: "어플리케이션"
        },
        {
            field_name: "Direction",
            field_label: "방향"
        },
        {
            field_name: "Dst",
            field_label: "타겟 IP"
        }
    ],
    directories: [
        {
            name: '/',
            type: 'DIRECTORY',
            parent: undefined,
            children: [
                {
                    name: 'home',
                    type: 'DIRECTORY',
                    parent: '/',
                    children: [
                        {
                            name: '.bash_history',
                            type: 'FILE',
                            file_size: 32819,
                            modified_date: 1674035700000
                        }
                    ]
                }
            ]
        }
    ]
}