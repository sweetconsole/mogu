
const image = (path) => {
    return `./images/${path}`
}

export const headerAssets = {
    "logo": {
        "image": {
            "imgAttr": {
                "src": image("header/logo_desktop.svg"),
                "alt": "Mogu",
            },
            "sources": [
                {
                    "srcSet": image("header/logo_mobile.svg"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
        "link": "root",
        "tag": "a"
    }, 
    "links": [
        {
            "title": "О нас",
            "link": "about"
        },
        {
            "title": "Кейсы",
            "link": "cases"
        },
        {
            "title": "Обратная связь",
            "link": "feedback"
        },
    ],
    "button": {
        "text": "Войти",
        "tag": "button"
    }
}

export const introAssets = {
    "leftBlock": {
        "title": "Таск-трекер\nдля креативных команд",
        "description": "Создавайте доски, приглашайте коллег и партнеров, работайте совместно над задачами!",
        "features": [
            {
                "text": "Бесплатно",
            },
            {
                "text": "Без привязки карты",
            },
            {
                "text": "2000+ пользователей",
            },
        ], 
        "input": {
            "placeholder": "Электронная почта",
            "name": "mail",
            "autocomplite": "true"
        },
        "button": {
            "text": "Начать",
            "arrow": {
                "imgAttr": {
                    "src": image("arrows/aqua_arrow.svg"),
                },
                "sources": [
                    {
                        "srcSet": image("arrows/aqua_arrow_mobile.svg"),
                        "media": "(max-width: 1023px)",
                    },
                ],
            },
            "tag": "button",
            "type": "submit",
        }
    },
    "rightBlock": {
        "title": "Совместная работа",
        "avatars": [
            {   
                "duration": 0.3,
                "image": {
                    "imgAttr": {
                        "src": image("intro/avatars/1_desktop.png"),
                    },
                    "sources": [
                        {
                            "srcSet": image("intro/avatars/1_mobile.png"),
                            "media": "(max-width: 1023px)",
                        },
                    ],
                },
                "message": {
                    "text": "А это вы",
                    "type": "footnote",
                    "color": "#1839CF",
                    "duration": 1.8,
                    "cursor":  {
                        "imgAttr": {
                            "src": image("intro/cursor.svg"),
                        },
                        "sources": [
                            {
                                "srcSet": image("intro/cursor_mobile.svg"),
                                "media": "(max-width: 1023px)",
                            },
                        ],
                    },
                },
            },
            {   
                "duration": 0.6,
                "image": {
                    "imgAttr": {
                        "src": image("intro/avatars/2_desktop.png"),
                    },
                    "sources": [
                        {
                            "srcSet": image("intro/avatars/2_mobile.png"),
                            "media": "(max-width: 1023px)",
                        },
                    ],
                },
            },

            {
                "duration": 0.9,
                "image": {
                    "imgAttr": {
                        "src": image("intro/avatars/3_desktop.png"),
                    },
                    "sources": [
                        {
                            "srcSet": image("intro/avatars/3_mobile.png"),
                            "media": "(max-width: 1023px)",
                        },
                    ],
                },           
                "message": {
                    "text": "Это ваш милейший коллега ",
                    "type": "bubble",
                    "color": "#E36D2F",
                    "duration": 2.1,
                }
            },
            {
                "duration": 1.2,
                "image": {
                    "imgAttr": {
                        "src": image("intro/avatars/4_desktop.png"),
                    },
                    "sources": [
                        {
                            "srcSet": image("intro/avatars/4_mobile.png"),
                            "media": "(max-width: 1023px)",
                        },
                    ],
                },
            },
            {
                "duration": 1.5,
                "image": {
                    "imgAttr": {
                        "src": image("intro/avatars/plus_desktop.png"),
                    },
                    "sources": [
                        {
                            "srcSet": image("intro/avatars/plus_mobile.png"),
                            "media": "(max-width: 1023px)",
                        },
                    ],
                },
            },
        ],
        "image": {
            "imgAttr": {
                "src": image("intro/pen_desktop.png"),
            },
            "sources": [
                {
                    "srcSet": image("intro/pen_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
    },
    "downArrow": {
        "image": {
            "imgAttr": {
                "src": image("arrows/down_arrow.svg"),
            },
            "sources": [
                {
                    "srcSet": image("intro/pen_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
        "link": "chars",
        "tag": "a"
    }, 
}

export const charsAssets = {
    "shadows": {
        "imgAttr": {
            "src": image("chars/shadows.svg"),
        },
    },
    "people": [
        {
            "image": {
                "imgAttr": {
                    "src": image("people/people_1_desktop.svg"),
                },
                "sources": [
                    {
                        "srcSet": image("people/people_1_mobile.svg"),
                        "media": "(max-width: 1023px)",
                    },
                ],
            },
        },
        {
            "image": {
                "imgAttr": {
                    "src": image("people/people_2_desktop.svg"),
                },
                "sources": [
                    {
                        "srcSet": image("people/people_2_mobile.svg"),
                        "media": "(max-width: 1023px)",
                    },
                ],
            },
        },
        {
            "image": {
                "imgAttr": {
                    "src": image("people/people_3_desktop.svg"),
                },
                "sources": [
                    {
                        "srcSet": image("people/people_3_mobile.svg"),
                        "media": "(max-width: 1023px)",
                    },
                ],
            },
        },
        {
            "image": {
                "imgAttr": {
                    "src": image("people/people_4_desktop.svg"),
                },
                "sources": [
                    {
                        "srcSet": image("people/people_4_mobile.svg"),
                        "media": "(max-width: 1023px)",
                    },
                ],
            },
        },
        {
            "image": {
                "imgAttr": {
                    "src": image("people/people_5_desktop.svg"),
                },
                "sources": [
                    {
                        "srcSet": image("people/people_5_mobile.svg"),
                        "media": "(max-width: 1023px)",
                    },
                ],
            },
        },
    ],
    "chars": {
        "charM": {
            "imgAttr": {
                "src": image("chars/char_m.svg"), 
            }
        },
        "charO": {
            "imgAttr": {
                "src": image("chars/char_o.svg"), 
            }
        },
        "charG": {
            "imgAttr": {
                "src": image("chars/char_g.svg"), 
            }
        },
        "charU": {
            "imgAttr": {
                "src": image("chars/char_u.svg"), 
            }
        },
        "all": {
            "imgAttr": {
                "src": image("chars/chars.svg"), 
            }
        },
    }
}

export const aboutAssets = [
    {
        "title": "Вся информация как на ладони",
        "description": "единая строка поиска для всех проектов - где бы ни была задача, вы быстро ее найдете",
        "image": {
            "imgAttr": {
                "src": image("about/about_1_desktop.png"),
            },
            "sources": [
                {
                    "srcSet": image("about/about_1_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
        "colors": {
            "background": "#FBEAEF",
            "color": "#3C711E",
        },
    },
    {
        "title": "Ничто не мешает полету мысли",
        "description": "фиксируйте новые идеи в один клик, прикрепляйте файлы и подробные описания сути задач",
        "image": {
            "imgAttr": {
                "src": image("about/about_2_desktop.png"),
            },
            "sources": [
                {
                    "srcSet": image("about/about_2_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
        "colors": {
            "background": "#000000",
            "color": "#C3C3C3",
            "title": "#FFFFFF",
        },
    },
    {
        "title": "Порядок в подарок",
        "description": "задачи удобно структурировать с помощью чек-листов, меток и пользовательских полей",
        "image": {
            "imgAttr": {
                "src": image("about/about_3_desktop.png"),
            },
            "sources": [
                {
                    "srcSet": image("about/about_3_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
        "colors": {
            "background": "#4F23AE",
            "color": "#72BDF8",
        },
        "points": [
            {   
                "type": "text",
                "text": "обновляйте статус задачи ",
            },
            {
                "arrow": {
                    "imgAttr": {
                        "src": image("arrows/white_arrow.svg"),
                    },
                    "sources": [
                        {
                            "srcSet": image("arrows/white_arrow_mobile.svg"),
                            "media": "(max-width: 1023px)",
                        },
                    ],
                },
            },
            {
                "text": "следите за сроками дедлайнов",
            },

            {
                "type": "arrow",
                "arrow": {
                    "imgAttr": {
                        "src": image("arrows/white_arrow.svg"),
                    },
                    "sources": [
                        {
                            "srcSet": image("arrows/white_arrow_mobile.svg"),
                            "media": "(max-width: 1023px)",
                        },
                    ],
                },
            },
            {
                "text": "отправляйте завершенные задачи в архив",
            },
        ],
    },
    {
        "title": "Совместная работа на одной доске ",
        "description": "приглашайте коллег, бизнес-партнеров и заказчиков ",
        "colors": {
            "background": "#F7FF8F",
            "color": "#000000",
        },
    },
    {
        "image": {
            "imgAttr": {
                "src": image("about/about_5_desktop.png"),
            },
            "sources": [
                {
                    "srcSet": image("about/about_5_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
        "colors": {
            "background": "#000000",
        },
    },
    {
        "title": "Настройка под вас ",
        "description": "устанавливайте персональный фон для каждого проекта ",
        "colors": {
            "background": "#DDEFD5",
            "color": "#DF6741",
        },
    },
]   

export const separatorAsset = {
    "imgAttr": {
        "src": image("separator/separator_desktop.png"),
        alt: "Separator"
    },
    "sources": [
        {
            "srcSet": image("separator/separator_mobile.png"),
            "media": "(max-width: 1023px)",
        },
    ],
}

export const casesAssets = [
    {
        "title": "Создание лендинга",
        "description": "Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям",
        "topic": "Product marketing",
        "image": {
            "imgAttr": {
                "src": image("cases/case_desktop.png"),
            },
            "sources": [
                {
                    "srcSet": image("cases/case_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
    },
    {
        "title": "Продвижение",
        "description": "Передайте в работу исполнителям, заведите доску, зафиксируйте все идеи на доске, проводите брейншторм, пригласят маркетолога, дизайнеров и верстальщика, расставьте приоритеты идей — с помощью меток или отдельных колонок, наиболее приоритетным назначьте дедлайны, занесите в колонку «Бэклог».",
        "topic": "Growth marketing",
        "image": {
            "imgAttr": {
                "src": image("cases/case_desktop.png"),
            },
            "sources": [
                {
                    "srcSet": image("cases/case_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        }
    },
    {
        "title": "Креативность",
        "description": "Создайте доску, приглашайте дизайнера, верстальщика и маркетолога, организуйте сессию мозгового штурма, фиксируйте идеи на доске, перенесите их в «Бэклог», ранжируйте с помощью маркеров или тематических столбцов, обозначьте задания сроками завершения и выполнение сотрудникам.",
        "topic": "Creative",
        "image": {
            "imgAttr": {
                "src": image("cases/case_desktop.png"),
            },
            "sources": [
                {
                    "srcSet": image("cases/case_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        }
    },
    {
        "title": "Маркетинг",
        "description": "Пригласите дизайнера, верстальщика и маркетолога, проведите мозговой штурм, заведите доску, зафиксируйте идеи на доске, добавьте их в колонку «Бэклог», приоритизируйте с помощью меток или колонок, самые важные установите сроки исполнения и передайте в работу специалистам  и поручите работ участникам команды.",
        "topic": "Marketing",
        "image": {
            "imgAttr": {
                "src": image("cases/case_desktop.png"),
            },
            "sources": [
                {
                    "srcSet": image("cases/case_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
        "disabled": true,
    },
    {
        "title": "Реклама",
        "description": "Запустите процесс организации доски, соберите команду — дизайнера, верстальщика и маркетолога, устройте брейншторм, зафиксируйте результаты, распределите их по колонкам («Бэклог»), оцените важность каждого пункта меток или специально зон, утвердите дедлайны для приоритетных элементов",
        "topic": "PR",
        "image": {
            "imgAttr": {
                "src": image("cases/case_desktop.png"),
            },
            "sources": [
                {
                    "srcSet": image("cases/case_mobile.png"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
        "disabled": true,
    },
]

export const feedbackAssets = {
    "form": {
        "title": "Обратная связь",
        "email": {
            "placeholder": "Электронная почта",
            "name": "mail",
            "autocomplite": "true"
        },
        "message": {
            "placeholder": "О чем хотите расссказать?",
            "name": "text",
        },
        "button": {
            "text": "отправить",
            "arrow": {
            "imgAttr": {
                "src": image("arrows/white_arrow.svg"),
            },
            "sources": [
                {
                    "srcSet": image("arrows/white_arrow_mobile.svg"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
            "tag": "button",
            "type": "sumbit"  
        },
    },
    "cat": {
        "body": {
            "imgAttr": {
                "src": image("feedback/cat_desktop.svg"),
            },
            "sources": [
                {
                    "srcSet": image("feedback/cat_mobile.svg"),
                    "media": "(max-width: 1023px)",
                },
            ],
        },
        "leftEye": {
            "imgAttr": {
                "src": image("feedback/left_eye.svg"),
            },
        },
        "rightEye": {
            "imgAttr": {
                "src": image("feedback/right_eye.svg"),
            },
        },
    }
}