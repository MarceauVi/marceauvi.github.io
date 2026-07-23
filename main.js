( () => {
    "use strict";
    var e = {
        1127(e, E, A) {
            function t() {
                return void 0 !== window.HTMLDialogElement
            }
            function r(e) {
                const E = e;
                return void 0 !== E.showModal && "function" == typeof E.showModal
            }
            function a(e) {
                e.showModal?.()
            }
            A.d(E, {
                Sf: () => t,
                nS: () => r,
                to: () => a
            })
        },
        1092(e, E, A) {
            A.d(E, {
                VK: () => o,
                mc: () => I,
                sS: () => _,
                u0: () => T,
                wS: () => N
            });
            var t = A(3592)
              , r = A(6760)
              , a = A(9019)
              , R = A(2665);
            const n = {
                playerView: void 0,
                players: new Map
            };
            function o(e) {
                n.playerView = e,
                n.players.clear();
                for (const E of e.players)
                    n.players.set(E.color, E.name)
            }
            function T(e) {
                return e.message = _(e.message),
                a.t.applyData(e, e => {
                    if (void 0 === e)
                        return "";
                    switch (e.type) {
                    case t.G.PLAYER:
                        return n.players.get(e.value) ?? e.value;
                    case t.G.TILE_TYPE:
                        return R.Fk[e.value];
                    default:
                        return _(String(e.value))
                    }
                }
                )
            }
            let i;
            function _(e) {
                const E = (0,
                r.l)().lang
                  , A = window._translations;
                if ("en" === E || void 0 === A)
                    return e;
                if (e = e.replace(/[\n\r]/g, "").replace(/[ ]+/g, " ").trim(),
                /^(\W|\d)*$/.test(e))
                    return e;
                let t = A[e];
                if (void 0 === t && e.startsWith("(") && e.endsWith(")")) {
                    const E = A[e.slice(1, -1)];
                    E && (t = `(${E})`)
                }
                if (void 0 === t) {
                    if (void 0 === i) {
                        i = new Set;
                        for (const e in A)
                            A.hasOwnProperty(e) && i.add(A[e])
                    }
                    i.has(e) || console.log(`${E} - please translate: "${e}"`)
                }
                return t || e
            }
            function I(e, E) {
                return T({
                    message: e,
                    data: E.map(e => ({
                        type: t.G.RAW_STRING,
                        value: e
                    }))
                })
            }
            function S(e, E) {
                for (let A = 0, t = e.childNodes.length; A < t; A++) {
                    const t = e.childNodes[A];
                    if (t.nodeType === Node.TEXT_NODE) {
                        const e = t
                          , A = E ? I(e.data, E) : _(e.data);
                        A !== e.data && (e.data = A)
                    } else {
                        if (t.nodeType === Node.ELEMENT_NODE && "true" === t.getAttribute("tm-has-i18n"))
                            continue;
                        S(t, E)
                    }
                }
            }
            function N(e, E) {
                let A;
                E?.value && (A = E.value instanceof Array ? E.value : [E.value]),
                S(e, A)
            }
            A.d(E, ["$t", 0, function(e) {
                return e ? "number" == typeof e ? e.toString() : "string" == typeof e ? _(e) : T(e) : ""
            }
            ])
        },
        2302(e, E, A) {
            var t = A(9726);
            function r(e) {
                for (let E = 0; E < e.childNodes.length; E++) {
                    const A = e.childNodes[E];
                    A.nodeType === Node.TEXT_NODE && "" === A.data.trim() && (A.remove(),
                    E--)
                }
            }
            const a = {
                id: "alert-dialog",
                class: "alert-dialog"
            }
              , R = {
                method: "dialog"
            }
              , n = {
                id: "alert-title",
                class: "title"
            }
              , o = {
                class: "main-container"
            }
              , T = {
                class: "notice"
            };
            var i = A(4144)
              , _ = A(1092)
              , I = A(1637)
              , S = A(3012)
              , N = A(1127)
              , O = A(5477)
              , s = A(1820);
            const C = (0,
            t.$V)( () => A.e(884).then(A.bind(A, 9466)))
              , l = (0,
            t.$V)( () => Promise.all([A.e(96), A.e(756), A.e(729), A.e(544), A.e(473), A.e(538), A.e(614)]).then(A.bind(A, 2234)))
              , L = (0,
            t.$V)( () => Promise.all([A.e(756), A.e(473), A.e(878)]).then(A.bind(A, 8628)))
              , M = (0,
            t.$V)( () => Promise.all([A.e(96), A.e(756), A.e(729), A.e(544), A.e(156), A.e(151), A.e(313)]).then(A.bind(A, 211)))
              , c = (0,
            t.$V)( () => Promise.all([A.e(957), A.e(491)]).then(A.bind(A, 7447)))
              , P = (0,
            t.$V)( () => A.e(492).then(A.bind(A, 7030)))
              , u = (0,
            t.$V)( () => Promise.all([A.e(96), A.e(756), A.e(729), A.e(22)]).then(A.bind(A, 6448)))
              , D = (0,
            t.$V)( () => A.e(966).then(A.bind(A, 3762)))
              , d = (0,
            t.$V)( () => A.e(50).then(A.bind(A, 4855)))
              , U = (0,
            t.$V)( () => Promise.all([A.e(96), A.e(756), A.e(729), A.e(544), A.e(473), A.e(156), A.e(151), A.e(538), A.e(957), A.e(217), A.e(412)]).then(A.bind(A, 9606)))
              , G = (0,
            t.$V)( () => Promise.all([A.e(96), A.e(756), A.e(729), A.e(544), A.e(473), A.e(156), A.e(151), A.e(538), A.e(957), A.e(217), A.e(98)]).then(A.bind(A, 9689)))
              , p = (0,
            t.$V)( () => Promise.all([A.e(473), A.e(646)]).then(A.bind(A, 7236)));
            function m() {
                return window.location.pathname.replace(/.*\//g, "")
            }
            const g = (0,
            t.pM)({
                name: "App",
                data: () => ({
                    screen: "empty",
                    playerkey: 0,
                    isServerSideRequestInProgress: !1,
                    componentsVisibility: {
                        milestones: !0,
                        awards_list: !0,
                        tags_concise: !1,
                        pinned_player_0: !1,
                        pinned_player_1: !1,
                        pinned_player_2: !1,
                        pinned_player_3: !1,
                        pinned_player_4: !1,
                        turmoil_parties: !1
                    },
                    game: void 0,
                    playerView: void 0,
                    spectator: void 0,
                    login: void 0
                }),
                components: {
                    StartScreen: p,
                    CreateGameForm: L,
                    LoadGameForm: d,
                    GameHome: c,
                    PlayerHome: U,
                    SpectatorHome: G,
                    GameEnd: M,
                    GamesOverview: P,
                    CardList: l,
                    Help: u,
                    AdminHome: C,
                    LoginHome: D
                },
                methods: {
                    showAlert(e, E, A= () => {}
                    ) {
                        const t = document.getElementById("alert-dialog")
                          , r = document.getElementById("alert-dialog-button")
                          , a = document.getElementById("alert-dialog-message")
                          , R = document.getElementById("alert-dialog-title");
                        if (null !== r && null !== R && null !== a && null !== t && (0,
                        N.nS)(t)) {
                            a.innerHTML = (0,
                            _.$t)(E),
                            R.textContent = (0,
                            _.$t)(e);
                            const n = () => {
                                r.removeEventListener("click", n),
                                A()
                            }
                            ;
                            r.addEventListener("click", n),
                            (0,
                            N.to)(t)
                        } else
                            alert(E),
                            A()
                    },
                    setVisibilityState(e, E) {
                        E !== this.getVisibilityState(e) && (this.componentsVisibility[e] = E)
                    },
                    getVisibilityState(e) {
                        return !!this.componentsVisibility[e]
                    },
                    update(e) {
                        const E = m()
                          , A = this
                          , t = "api/" + e + window.location.search.replace("&noredirect", "");
                        fetch(t).then(e => {
                            if (!e.ok)
                                throw new Error(`Error getting game data: ${e.statusText}`);
                            return e.json()
                        }
                        ).then(t => {
                            e === I.f.PLAYER ? (A.playerView = t,
                            (0,
                            _.VK)(A.playerView)) : e === I.f.SPECTATOR && (A.spectator = t),
                            A.playerkey++,
                            "end" === t.game.phase && !1 === window.location.search.includes("&noredirect") ? (A.screen = "the-end",
                            E !== I.f.THE_END && window.history.replaceState(t, `${i.C3} - Player`, `${I.f.THE_END}?id=${t.id}`)) : (e === I.f.PLAYER ? A.screen = "player-home" : e === I.f.SPECTATOR && (A.screen = "spectator-home"),
                            E !== e && window.history.replaceState(t, `${i.C3} - Game`, `${e}?id=${t.id}`))
                        }
                        ).catch(e => {
                            alert("Error getting game data"),
                            console.error(e)
                        }
                        )
                    },
                    updatePlayer() {
                        this.update(I.f.PLAYER)
                    },
                    updateSpectator() {
                        this.update(I.f.SPECTATOR)
                    }
                },
                mounted() {
                    (0,
                    s.S)(),
                    (0,
                    N.Sf)() || O.A.registerDialog(document.getElementById("alert-dialog"));
                    const e = m()
                      , E = this;
                    if (e === I.f.PLAYER)
                        E.updatePlayer();
                    else if (e === I.f.THE_END) {
                        const e = new URLSearchParams(window.location.search).get("id") || "";
                        (0,
                        S.PT)(e) ? E.updatePlayer() : (0,
                        S.Vb)(e) ? E.updateSpectator() : alert("Bad id URL parameter.")
                    } else if (e === I.f.GAME) {
                        const e = I.f.API_GAME + window.location.search;
                        fetch(e).then(e => {
                            if (!e.ok)
                                throw new Error(`Error getting game data: ${e.statusText}`);
                            return e.json()
                        }
                        ).then(e => {
                            E.screen = "game-home",
                            E.game = e,
                            window.history.replaceState(e, `${i.C3} - Game`, `${I.f.GAME}?id=${e.id}`)
                        }
                        ).catch(e => {
                            alert("Error getting game data"),
                            console.error(e)
                        }
                        )
                    } else
                        e === I.f.GAMES_OVERVIEW ? E.screen = "games-overview" : e === I.f.NEW_GAME ? E.screen = "create-game-form" : e === I.f.LOAD ? E.screen = "load" : e === I.f.CARDS ? E.screen = "cards" : e === I.f.HELP ? E.screen = "help" : e === I.f.SPECTATOR ? E.updateSpectator() : e === I.f.ADMIN ? E.screen = "admin" : e === I.f.LOGIN ? E.screen = "login-home" : E.screen = "start-screen"
                }
            })
              , H = (0,
            A(6262).A)(g, [["render", function(e, E, A, r, i, _) {
                const I = (0,
                t.g2)("StartScreen")
                  , S = (0,
                t.g2)("CreateGameForm")
                  , N = (0,
                t.g2)("LoadGameForm")
                  , O = (0,
                t.g2)("GameHome")
                  , s = (0,
                t.g2)("PlayerHome")
                  , C = (0,
                t.g2)("SpectatorHome")
                  , l = (0,
                t.g2)("GameEnd")
                  , L = (0,
                t.g2)("GamesOverview")
                  , M = (0,
                t.g2)("CardList")
                  , c = (0,
                t.g2)("AdminHome")
                  , P = (0,
                t.g2)("LoginHome")
                  , u = (0,
                t.g2)("Help")
                  , D = (0,
                t.gN)("i18n");
                return (0,
                t.uX)(),
                (0,
                t.CE)("div", {
                    class: (0,
                    t.C4)("topmost-" + e.screen)
                }, [(0,
                t.Lk)("section", null, [(0,
                t.Lk)("dialog", a, [(0,
                t.Lk)("form", R, [(0,
                t.bo)(((0,
                t.uX)(),
                (0,
                t.CE)("p", n, [...E[0] || (E[0] = [(0,
                t.eW)("Error with input", -1)])])), [[D]]), E[1] || (E[1] = (0,
                t.Lk)("p", {
                    id: "alert-dialog-message"
                }, null, -1)), E[2] || (E[2] = (0,
                t.Lk)("menu", {
                    class: "dialog-menu centered-content"
                }, [(0,
                t.Lk)("button", {
                    id: "alert-dialog-button",
                    class: "btn btn-lg btn-primary"
                }, "OK")], -1))])])]), (0,
                t.Lk)("div", o, ["start-screen" === e.screen ? ((0,
                t.uX)(),
                (0,
                t.Wv)(I, {
                    key: 0
                })) : "create-game-form" === e.screen ? ((0,
                t.uX)(),
                (0,
                t.Wv)(S, {
                    key: 1
                })) : "load" === e.screen ? ((0,
                t.uX)(),
                (0,
                t.Wv)(N, {
                    key: 2
                })) : "game-home" === e.screen && void 0 !== e.game ? ((0,
                t.uX)(),
                (0,
                t.Wv)(O, {
                    key: 3,
                    game: e.game
                }, null, 8, ["game"])) : "player-home" === e.screen && void 0 !== e.playerView ? ((0,
                t.uX)(),
                (0,
                t.Wv)(s, {
                    "player-view": e.playerView,
                    key: e.playerkey
                }, null, 8, ["player-view"])) : "spectator-home" === e.screen && void 0 !== e.spectator ? ((0,
                t.uX)(),
                (0,
                t.Wv)(C, {
                    spectator: e.spectator,
                    key: "spectator-" + e.playerkey
                }, null, 8, ["spectator"])) : "the-end" === e.screen ? ((0,
                t.uX)(),
                (0,
                t.Wv)(l, {
                    key: 6,
                    "player-view": e.playerView,
                    spectator: e.spectator
                }, null, 8, ["player-view", "spectator"])) : "games-overview" === e.screen ? ((0,
                t.uX)(),
                (0,
                t.Wv)(L, {
                    key: 7
                })) : "cards" === e.screen ? ((0,
                t.uX)(),
                (0,
                t.Wv)(M, {
                    key: 8
                })) : "admin" === e.screen ? ((0,
                t.uX)(),
                (0,
                t.Wv)(c, {
                    key: 9
                })) : "login-home" === e.screen ? ((0,
                t.uX)(),
                (0,
                t.Wv)(P, {
                    key: 10
                })) : "help" === e.screen ? ((0,
                t.uX)(),
                (0,
                t.Wv)(u, {
                    key: 11
                })) : (0,
                t.Q3)("", !0)]), (0,
                t.bo)(((0,
                t.uX)(),
                (0,
                t.CE)("div", T, [...E[3] || (E[3] = [(0,
                t.eW)(" Not affiliated with FryxGames, Asmodee Digital or Steam in any way. ", -1)])])), [[D]])], 2)
            }
            ]]);
            var h = A(6760);
            const y = {
                install: e => {
                    e.config.globalProperties.$t = _.$t,
                    e.directive("i18n", {
                        mounted: (e, E) => {
                            e.setAttribute("tm-has-i18n", "true"),
                            (0,
                            _.wS)(e, E)
                        }
                        ,
                        updated: _.wS
                    })
                }
            };
            function F() {
                const e = new URLSearchParams(window.location.hash.slice(1));
                if (e.has("access_token")) {
                    const E = e.get("state");
                    if (null !== E && localStorage.getItem("stateParameter") !== atob(decodeURIComponent(E)))
                        return console.log("You may have been clickjacked!");
                    const A = e.get("access_token")
                      , t = e.get("token_type");
                    fetch("https://discord.com/api/users/@me", {
                        headers: {
                            authorization: `${t} ${A}`
                        }
                    }).then(e => e.json()).then(e => {
                        const {username: E, discriminator: A} = e
                          , t = document.getElementById("info");
                        t && (t.innerText += ` ${E}#${A}`)
                    }
                    ).catch(console.error)
                } else {
                    const e = document.getElementById("login");
                    e && (e.style.display = "block")
                }
            }
            const B = function() {
                const e = Math.floor(10 * Math.random());
                let E = "";
                for (let A = 0; A < 20 + e; A++)
                    E += String.fromCharCode(33 + Math.floor(94 * Math.random()));
                return E
            }();
            localStorage.setItem("stateParameter", B);
            const V = document.getElementById("login");
            V && (V.href += `&state=${btoa(B)}`);
            const Y = (0,
            t.$V)( () => Promise.all([A.e(96), A.e(756), A.e(729), A.e(544), A.e(156), A.e(415)]).then(A.bind(A, 5637)));
            !async function() {
                const e = (0,
                h.l)().lang;
                if ("en" !== e)
                    try {
                        window._translations = await fetch(`assets/locales/${e}.json`).then(e => e.json())
                    } catch (E) {
                        console.warn(`Cannot load ${e} translations. See network for details.`)
                    }
                const E = (0,
                t.Ef)(H);
                E.use(y),
                E.component("PlayerInputFactory", Y),
                E.directive("trim-whitespace", {
                    mounted: r,
                    updated: r
                }),
                window.isSecureContext && "serviceWorker"in navigator && window.addEventListener("load", function() {
                    navigator.serviceWorker.register("sw.js").then(function(e) {
                        console.log("registered the service worker", e)
                    })
                }),
                E.mount("#app"),
                window.onload = F
            }()
        },
        6760(e, E, A) {
            A.d(E, {
                M: () => r,
                l: () => a
            });
            const t = {
                learner_mode: !0,
                enable_sounds: !0,
                magnify_cards: !0,
                show_alerts: !0,
                lang: "en",
                hide_hand: !1,
                hide_awards_and_milestones: !1,
                show_milestone_details: !0,
                show_award_details: !0,
                hide_top_bar: !1,
                small_cards: !1,
                remove_background: !1,
                hide_active_cards: !1,
                hide_automated_cards: !1,
                hide_event_cards: !1,
                hide_tile_confirmation: !1,
                hide_discount_on_cards: !1,
                hide_animated_sidebar: !1,
                symbol_overlay: !1,
                animated_title: !0,
                experimental_ui: !1,
                debug_view: !1
            };
            class r {
                localStorageSupported() {
                    return "undefined" != typeof localStorage
                }
                static resetForTest() {
                    this.INSTANCE = new r
                }
                constructor() {
                    this._values = {
                        ...t
                    };
                    for (const e of Object.keys(t)) {
                        const E = this.localStorageSupported() ? localStorage.getItem(e) : void 0;
                        E && this._set(e, E)
                    }
                }
                _set(e, E) {
                    "lang" === e ? this._values.lang = String(E) : this._values[e] = "boolean" == typeof E ? E : "1" === E
                }
                values() {
                    return this._values
                }
                set(e, E, A=!1) {
                    A && this._values[e] === E || (this._set(e, E),
                    this.localStorageSupported() && ("lang" === e ? localStorage.setItem(e, this._values.lang) : localStorage.setItem(e, E ? "1" : "0")))
                }
            }
            function a() {
                return r.INSTANCE.values()
            }
            r.INSTANCE = new r
        },
        1820(e, E, A) {
            A.d(E, {
                O: () => R,
                S: () => a
            });
            var t = A(4144)
              , r = A(1092);
            function a(e) {
                document.title = void 0 === e ? (0,
                r.$t)(t.C3) : `${(0,
                r.$t)(e)} | ${(0,
                r.$t)(t.C3)}`
            }
            function R(e) {
                return `${e.name} | ${(0,
                r.$t)(t.C3)}`
            }
        },
        2665(e, E, A) {
            A.d(E, {
                nb: () => t
            });
            var t, r = A(1664);
            !function(e) {
                e[e.GREENERY = 0] = "GREENERY",
                e[e.OCEAN = 1] = "OCEAN",
                e[e.CITY = 2] = "CITY",
                e[e.CAPITAL = 3] = "CAPITAL",
                e[e.COMMERCIAL_DISTRICT = 4] = "COMMERCIAL_DISTRICT",
                e[e.ECOLOGICAL_ZONE = 5] = "ECOLOGICAL_ZONE",
                e[e.INDUSTRIAL_CENTER = 6] = "INDUSTRIAL_CENTER",
                e[e.LAVA_FLOWS = 7] = "LAVA_FLOWS",
                e[e.MINING_AREA = 8] = "MINING_AREA",
                e[e.MINING_RIGHTS = 9] = "MINING_RIGHTS",
                e[e.MOHOLE_AREA = 10] = "MOHOLE_AREA",
                e[e.NATURAL_PRESERVE = 11] = "NATURAL_PRESERVE",
                e[e.NUCLEAR_ZONE = 12] = "NUCLEAR_ZONE",
                e[e.RESTRICTED_AREA = 13] = "RESTRICTED_AREA",
                e[e.DEIMOS_DOWN = 14] = "DEIMOS_DOWN",
                e[e.GREAT_DAM = 15] = "GREAT_DAM",
                e[e.MAGNETIC_FIELD_GENERATORS = 16] = "MAGNETIC_FIELD_GENERATORS",
                e[e.BIOFERTILIZER_FACILITY = 17] = "BIOFERTILIZER_FACILITY",
                e[e.METALLIC_ASTEROID = 18] = "METALLIC_ASTEROID",
                e[e.SOLAR_FARM = 19] = "SOLAR_FARM",
                e[e.OCEAN_CITY = 20] = "OCEAN_CITY",
                e[e.OCEAN_FARM = 21] = "OCEAN_FARM",
                e[e.OCEAN_SANCTUARY = 22] = "OCEAN_SANCTUARY",
                e[e.DUST_STORM_MILD = 23] = "DUST_STORM_MILD",
                e[e.DUST_STORM_SEVERE = 24] = "DUST_STORM_SEVERE",
                e[e.EROSION_MILD = 25] = "EROSION_MILD",
                e[e.EROSION_SEVERE = 26] = "EROSION_SEVERE",
                e[e.MINING_STEEL_BONUS = 27] = "MINING_STEEL_BONUS",
                e[e.MINING_TITANIUM_BONUS = 28] = "MINING_TITANIUM_BONUS",
                e[e.MOON_MINE = 29] = "MOON_MINE",
                e[e.MOON_HABITAT = 30] = "MOON_HABITAT",
                e[e.MOON_ROAD = 31] = "MOON_ROAD",
                e[e.LUNA_TRADE_STATION = 32] = "LUNA_TRADE_STATION",
                e[e.LUNA_MINING_HUB = 33] = "LUNA_MINING_HUB",
                e[e.LUNA_TRAIN_STATION = 34] = "LUNA_TRAIN_STATION",
                e[e.LUNAR_MINE_URBANIZATION = 35] = "LUNAR_MINE_URBANIZATION",
                e[e.WETLANDS = 36] = "WETLANDS",
                e[e.RED_CITY = 37] = "RED_CITY",
                e[e.MARTIAN_NATURE_WONDERS = 38] = "MARTIAN_NATURE_WONDERS",
                e[e.CRASHLANDING = 39] = "CRASHLANDING",
                e[e.MARS_NOMADS = 40] = "MARS_NOMADS",
                e[e.REY_SKYWALKER = 41] = "REY_SKYWALKER",
                e[e.MAN_MADE_VOLCANO = 42] = "MAN_MADE_VOLCANO",
                e[e.NEW_HOLLAND = 43] = "NEW_HOLLAND",
                e[e.NEURAL_INSTANCE = 44] = "NEURAL_INSTANCE"
            }(t || (t = {}));
            const a = {
                [t.GREENERY]: "greenery",
                [t.OCEAN]: "ocean",
                [t.CITY]: "city",
                [t.CAPITAL]: r.u.CAPITAL,
                [t.COMMERCIAL_DISTRICT]: r.u.COMMERCIAL_DISTRICT,
                [t.ECOLOGICAL_ZONE]: r.u.ECOLOGICAL_ZONE,
                [t.INDUSTRIAL_CENTER]: r.u.INDUSTRIAL_CENTER,
                [t.LAVA_FLOWS]: r.u.LAVA_FLOWS,
                [t.MINING_AREA]: r.u.MINING_AREA,
                [t.MINING_RIGHTS]: r.u.MINING_RIGHTS,
                [t.MOHOLE_AREA]: r.u.MOHOLE_AREA,
                [t.NATURAL_PRESERVE]: r.u.NATURAL_PRESERVE,
                [t.NUCLEAR_ZONE]: r.u.NUCLEAR_ZONE,
                [t.RESTRICTED_AREA]: r.u.RESTRICTED_AREA,
                [t.DEIMOS_DOWN]: r.u.DEIMOS_DOWN,
                [t.GREAT_DAM]: r.u.GREAT_DAM,
                [t.MAGNETIC_FIELD_GENERATORS]: r.u.MAGNETIC_FIELD_GENERATORS,
                [t.BIOFERTILIZER_FACILITY]: r.u.BIOFERTILIZER_FACILITY,
                [t.METALLIC_ASTEROID]: r.u.METALLIC_ASTEROID,
                [t.SOLAR_FARM]: r.u.SOLAR_FARM,
                [t.OCEAN_CITY]: r.u.OCEAN_CITY,
                [t.OCEAN_FARM]: r.u.OCEAN_FARM,
                [t.OCEAN_SANCTUARY]: r.u.OCEAN_SANCTUARY,
                [t.DUST_STORM_MILD]: "Mild Dust Storm",
                [t.DUST_STORM_SEVERE]: "Severe Dust Storm",
                [t.EROSION_MILD]: "Mild Erosion",
                [t.EROSION_SEVERE]: "Severe Erosion",
                [t.MINING_STEEL_BONUS]: "Mining (Steel)",
                [t.MINING_TITANIUM_BONUS]: "Mining (Titanium)",
                [t.MOON_MINE]: "Mine",
                [t.MOON_HABITAT]: "Habitat",
                [t.MOON_ROAD]: "Road",
                [t.LUNA_TRADE_STATION]: r.u.LUNA_TRADE_STATION,
                [t.LUNA_MINING_HUB]: r.u.LUNA_MINING_HUB,
                [t.LUNA_TRAIN_STATION]: r.u.LUNA_TRAIN_STATION,
                [t.LUNAR_MINE_URBANIZATION]: r.u.LUNAR_MINE_URBANIZATION,
                [t.WETLANDS]: r.u.WETLANDS,
                [t.RED_CITY]: r.u.RED_CITY,
                [t.MARTIAN_NATURE_WONDERS]: r.u.MARTIAN_NATURE_WONDERS,
                [t.CRASHLANDING]: r.u.CRASHLANDING,
                [t.MARS_NOMADS]: r.u.MARS_NOMADS,
                [t.REY_SKYWALKER]: r.u.REY_SKYWALKER,
                [t.MAN_MADE_VOLCANO]: r.u.MAN_MADE_VOLCANO,
                [t.NEW_HOLLAND]: r.u.NEW_HOLLAND,
                [t.NEURAL_INSTANCE]: "Neural Instance"
            };
            new Set([t.DUST_STORM_MILD, t.DUST_STORM_SEVERE, t.EROSION_MILD, t.EROSION_SEVERE]),
            new Set([t.OCEAN_CITY, t.OCEAN_FARM, t.OCEAN_SANCTUARY, t.NEW_HOLLAND]),
            new Set([t.CITY, t.CAPITAL, t.OCEAN_CITY, t.RED_CITY, t.NEW_HOLLAND]),
            new Set([t.OCEAN, t.OCEAN_CITY, t.OCEAN_FARM, t.OCEAN_SANCTUARY, t.WETLANDS, t.NEW_HOLLAND]),
            new Set([t.OCEAN, t.WETLANDS]),
            new Set([t.GREENERY, t.WETLANDS]),
            A.d(E, ["Fk", 0, a])
        },
        3012(e, E, A) {
            function t(e) {
                return "p" === e?.charAt?.(0)
            }
            function r(e) {
                return "s" === e?.charAt?.(0)
            }
            A.d(E, {
                PT: () => t,
                Vb: () => r
            })
        },
        1637(e, E, A) {
            A.d(E, ["f", 0, {
                ADMIN: "admin",
                API_CLONEABLEGAME: "api/cloneablegame",
                API_CREATEGAME: "api/creategame",
                API_GAME: "api/game",
                API_GAME_HISTORY: "api/game/history",
                API_GAME_LOGS: "api/game/logs",
                API_GAMES: "api/games",
                API_HEAP_SNAPSHOT: "api/heapsnapshot",
                API_IPS: "api/ips",
                API_METRICS: "api/metrics",
                API_LOGOUT: "api/logout",
                API_PLAYER: "api/player",
                API_PROFILE: "api/profile",
                API_SPECTATOR: "api/spectator",
                API_STATS: "api/stats",
                API_WAITING_FOR: "api/waitingfor",
                AUTH_DISCORD_CALLBACK: "auth/discord/callback",
                AUTOPASS: "autopass",
                CARDS: "cards",
                GAME: "game",
                GAMES_OVERVIEW: "games-overview",
                HELP: "help",
                LOAD: "load",
                LOAD_GAME: "load_game",
                LOGIN: "login",
                NEW_GAME: "new-game",
                PLAYER: "player",
                PLAYER_INPUT: "player/input",
                RESET: "reset",
                SPECTATOR: "spectator",
                THE_END: "the-end"
            }])
        },
        1664(e, E, A) {
            var t;
            A.d(E, {
                u: () => t
            }),
            function(e) {
                e.SELL_PATENTS_STANDARD_PROJECT = "Sell Patents",
                e.POWER_PLANT_STANDARD_PROJECT = "Power Plant:SP",
                e.ASTEROID_STANDARD_PROJECT = "Asteroid:SP",
                e.BUFFER_GAS_STANDARD_PROJECT = "Buffer Gas",
                e.BUILD_COLONY_STANDARD_PROJECT = "Build Colony",
                e.AQUIFER_STANDARD_PROJECT = "Aquifer",
                e.GREENERY_STANDARD_PROJECT = "Greenery",
                e.CITY_STANDARD_PROJECT = "City",
                e.AIR_SCRAPPING_STANDARD_PROJECT = "Air Scrapping",
                e.AIR_SCRAPPING_STANDARD_PROJECT_VARIANT = "Air Scrapping (Var)",
                e.CONVERT_PLANTS = "Convert Plants",
                e.CONVERT_HEAT = "Convert Heat",
                e.ACQUIRED_COMPANY = "Acquired Company",
                e.ADAPTATION_TECHNOLOGY = "Adaptation Technology",
                e.ADAPTED_LICHEN = "Adapted Lichen",
                e.ADVANCED_ALLOYS = "Advanced Alloys",
                e.ADVANCED_ECOSYSTEMS = "Advanced Ecosystems",
                e.AEROBRAKED_AMMONIA_ASTEROID = "Aerobraked Ammonia Asteroid",
                e.AI_CENTRAL = "AI Central",
                e.AIR_RAID = "Air Raid",
                e.AIRLINERS = "Airliners",
                e.ALGAE = "Algae",
                e.ANTI_GRAVITY_TECHNOLOGY = "Anti-Gravity Technology",
                e.ANTS = "Ants",
                e.AQUIFER_PUMPING = "Aquifer Pumping",
                e.AQUIFER_TURBINES = "Aquifer Turbines",
                e.ARCHAEBACTERIA = "ArchaeBacteria",
                e.ARTIFICIAL_LAKE = "Artificial Lake",
                e.ARTIFICIAL_PHOTOSYNTHESIS = "Artificial Photosynthesis",
                e.ARCTIC_ALGAE = "Arctic Algae",
                e.ASTEROID = "Asteroid",
                e.ASTEROID_MINING = "Asteroid Mining",
                e.ASTEROID_MINING_CONSORTIUM = "Asteroid Mining Consortium",
                e.ATMO_COLLECTORS = "Atmo Collectors",
                e.BREATHING_FILTERS = "Breathing Filters",
                e.BRIBED_COMMITTEE = "Bribed Committee",
                e.BEAM_FROM_A_THORIUM_ASTEROID = "Beam From A Thorium Asteroid",
                e.BIG_ASTEROID = "Big Asteroid",
                e.BIOMASS_COMBUSTORS = "Biomass Combustors",
                e.BIRDS = "Birds",
                e.BLACK_POLAR_DUST = "Black Polar Dust",
                e.BUILDING_INDUSTRIES = "Building Industries",
                e.BUSHES = "Bushes",
                e.BUSINESS_CONTACTS = "Business Contacts",
                e.BUSINESS_NETWORK = "Business Network",
                e.CALLISTO_PENAL_MINES = "Callisto Penal Mines",
                e.CARBONATE_PROCESSING = "Carbonate Processing",
                e.CAPITAL = "Capital",
                e.CARETAKER_CONTRACT = "Caretaker Contract",
                e.CARTEL = "Cartel",
                e.CEOS_FAVORITE_PROJECT = "CEO's Favorite Project",
                e.CLOUD_SEEDING = "Cloud Seeding",
                e.COLONIZER_TRAINING_CAMP = "Colonizer Training Camp",
                e.COMET = "Comet",
                e.COMMERCIAL_DISTRICT = "Commercial District",
                e.COMMUNITY_SERVICES = "Community Services",
                e.CONSCRIPTION = "Conscription",
                e.CONVOY_FROM_EUROPA = "Convoy From Europa",
                e.CORONA_EXTRACTOR = "Corona Extractor",
                e.CORPORATE_STRONGHOLD = "Corporate Stronghold",
                e.CRYO_SLEEP = "Cryo-Sleep",
                e.CUPOLA_CITY = "Cupola City",
                e.DECOMPOSERS = "Decomposers",
                e.DEEP_WELL_HEATING = "Deep Well Heating",
                e.DEIMOS_DOWN = "Deimos Down",
                e.DESIGNED_MICROORGANISMS = "Designed Microorganisms",
                e.DEVELOPMENT_CENTER = "Development Center",
                e.DIRIGIBLES = "Dirigibles",
                e.DOME_FARMING = "Dome Farming",
                e.DOMED_CRATER = "Domed Crater",
                e.DUST_SEALS = "Dust Seals",
                e.EARLY_SETTLEMENT = "Early Settlement",
                e.EARTH_CATAPULT = "Earth Catapult",
                e.EARTH_ELEVATOR = "Earth Elevator",
                e.EARTH_OFFICE = "Earth Office",
                e.ECCENTRIC_SPONSOR = "Eccentric Sponsor",
                e.ECOLOGICAL_ZONE = "Ecological Zone",
                e.ECOLOGY_EXPERTS = "Ecology Experts",
                e.ECOLOGY_RESEARCH = "Ecology Research",
                e.ELECTRO_CATAPULT = "Electro Catapult",
                e.ENERGY_SAVING = "Energy Saving",
                e.ENERGY_TAPPING = "Energy Tapping",
                e.EOS_CHASMA_NATIONAL_PARK = "Eos Chasma National Park",
                e.EQUATORIAL_MAGNETIZER = "Equatorial Magnetizer",
                e.EXTREME_COLD_FUNGUS = "Extreme-Cold Fungus",
                e.FARMING = "Farming",
                e.FISH = "Fish",
                e.FLOATER_LEASING = "Floater Leasing",
                e.FLOATER_PROTOTYPES = "Floater Prototypes",
                e.FLOATER_TECHNOLOGY = "Floater Technology",
                e.FLOODING = "Flooding",
                e.FOOD_FACTORY = "Food Factory",
                e.FUEL_FACTORY = "Fuel Factory",
                e.FUELED_GENERATORS = "Fueled Generators",
                e.FUSION_POWER = "Fusion Power",
                e.GALILEAN_WAYSTATION = "Galilean Waystation",
                e.GANYMEDE_COLONY = "Ganymede Colony",
                e.GENE_REPAIR = "Gene Repair",
                e.GEOTHERMAL_POWER = "Geothermal Power",
                e.GHG_PRODUCING_BACTERIA = "GHG Producing Bacteria",
                e.GHG_FACTORIES = "GHG Factories",
                e.GIANT_ICE_ASTEROID = "Giant Ice Asteroid",
                e.GIANT_SPACE_MIRROR = "Giant Space Mirror",
                e.GRASS = "Grass",
                e.GREAT_AQUIFER = "Great Aquifer",
                e.GREAT_DAM = "Great Dam",
                e.GREAT_ESCARPMENT_CONSORTIUM = "Great Escarpment Consortium",
                e.GREENHOUSES = "Greenhouses",
                e.GYROPOLIS = "Gyropolis",
                e.HACKERS = "Hackers",
                e.HEATHER = "Heather",
                e.HEAT_TRAPPERS = "Heat Trappers",
                e.HEAVY_TAXATION = "Heavy Taxation",
                e.HERBIVORES = "Herbivores",
                e.HIRED_RAIDERS = "Hired Raiders",
                e.HOUSE_PRINTING = "House Printing",
                e.ICE_ASTEROID = "Ice Asteroid",
                e.ICE_CAP_MELTING = "Ice Cap Melting",
                e.ICE_MOON_COLONY = "Ice Moon Colony",
                e.IMMIGRANT_CITY = "Immigrant City",
                e.IMMIGRATION_SHUTTLES = "Immigration Shuttles",
                e.IMPACTOR_SWARM = "Impactor Swarm",
                e.IMPORTED_GHG = "Imported GHG",
                e.IMPORTED_HYDROGEN = "Imported Hydrogen",
                e.IMPORTED_NITROGEN = "Imported Nitrogen",
                e.IMPORT_OF_ADVANCED_GHG = "Import of Advanced GHG",
                e.INDENTURED_WORKERS = "Indentured Workers",
                e.INDUSTRIAL_MICROBES = "Industrial Microbes",
                e.INSECTS = "Insects",
                e.INSULATION = "Insulation",
                e.INTERPLANETARY_COLONY_SHIP = "Interplanetary Colony Ship",
                e.INTERSTELLAR_COLONY_SHIP = "Interstellar Colony Ship",
                e.INVENTION_CONTEST = "Invention Contest",
                e.INVENTORS_GUILD = "Inventors' Guild",
                e.INVESTMENT_LOAN = "Investment Loan",
                e.IO_MINING_INDUSTRIES = "Io Mining Industries",
                e.IRONWORKS = "Ironworks",
                e.JOVIAN_LANTERNS = "Jovian Lanterns",
                e.JUPITER_FLOATING_STATION = "Jupiter Floating Station",
                e.KELP_FARMING = "Kelp Farming",
                e.LAGRANGE_OBSERVATORY = "Lagrange Observatory",
                e.LAKE_MARINERIS = "Lake Marineris",
                e.LAND_CLAIM = "Land Claim",
                e.LARGE_CONVOY = "Large Convoy",
                e.LAVA_FLOWS = "Lava Flows",
                e.LAVA_TUBE_SETTLEMENT = "Lava Tube Settlement",
                e.LICHEN = "Lichen",
                e.LIGHTNING_HARVEST = "Lightning Harvest",
                e.LIVESTOCK = "Livestock",
                e.LOCAL_HEAT_TRAPPING = "Local Heat Trapping",
                e.LUNAR_BEAM = "Lunar Beam",
                e.LUNA_GOVERNOR = "Luna Governor",
                e.LUNAR_EXPORTS = "Lunar Exports",
                e.LUNAR_MINING = "Lunar Mining",
                e.MAGNETIC_FIELD_DOME = "Magnetic Field Dome",
                e.MAGNETIC_FIELD_GENERATORS = "Magnetic Field Generators",
                e.MARKET_MANIPULATION = "Market Manipulation",
                e.MARTIAN_INDUSTRIES = "Martian Industries",
                e.MARTIAN_ZOO = "Martian Zoo",
                e.MANGROVE = "Mangrove",
                e.MARS_UNIVERSITY = "Mars University",
                e.MARTIAN_RAILS = "Martian Rails",
                e.MASS_CONVERTER = "Mass Converter",
                e.MEDIA_ARCHIVES = "Media Archives",
                e.MEDIA_GROUP = "Media Group",
                e.MEDICAL_LAB = "Medical Lab",
                e.METHANE_FROM_TITAN = "Methane From Titan",
                e.MICRO_MILLS = "Micro-Mills",
                e.MINE = "Mine",
                e.MINERAL_DEPOSIT = "Mineral Deposit",
                e.MIRANDA_RESORT = "Miranda Resort",
                e.MINING_AREA = "Mining Area",
                e.MINING_COLONY = "Mining Colony",
                e.MINING_EXPEDITION = "Mining Expedition",
                e.MINING_OPERATIONS = "Mining Operations",
                e.MINING_QUOTA = "Mining Quota",
                e.MINING_RIGHTS = "Mining Rights",
                e.MINORITY_REFUGE = "Minority Refuge",
                e.MOHOLE = "Mohole",
                e.MOHOLE_AREA = "Mohole Area",
                e.MOHOLE_EXCAVATION = "Mohole Excavation",
                e.MOLECULAR_PRINTING = "Molecular Printing",
                e.MOSS = "Moss",
                e.NATURAL_PRESERVE = "Natural Preserve",
                e.NITRITE_REDUCING_BACTERIA = "Nitrite Reducing Bacteria",
                e.NITROGEN_RICH_ASTEROID = "Nitrogen-Rich Asteroid",
                e.NITROGEN_FROM_TITAN = "Nitrogen from Titan",
                e.NITROPHILIC_MOSS = "Nitrophilic Moss",
                e.NOCTIS_CITY = "Noctis City",
                e.NOCTIS_FARMING = "Noctis Farming",
                e.NUCLEAR_POWER = "Nuclear Power",
                e.NUCLEAR_ZONE = "Nuclear Zone",
                e.OLYMPUS_CONFERENCE = "Olympus Conference",
                e.OMNICOURT = "Omnicourt",
                e.OPEN_CITY = "Open City",
                e.OPTIMAL_AEROBRAKING = "Optimal Aerobraking",
                e.ORE_PROCESSOR = "Ore Processor",
                e.PERMAFROST_EXTRACTION = "Permafrost Extraction",
                e.PEROXIDE_POWER = "Peroxide Power",
                e.PETS = "Pets",
                e.PHOBOS_SPACE_HAVEN = "Phobos Space Haven",
                e.PHYSICS_COMPLEX = "Physics Complex",
                e.PIONEER_SETTLEMENT = "Pioneer Settlement",
                e.PLANTATION = "Plantation",
                e.POLAR_INDUSTRIES = "Polar Industries",
                e.POWER_GRID = "Power Grid",
                e.POWER_INFRASTRUCTURE = "Power Infrastructure",
                e.POWER_PLANT = "Power Plant",
                e.POWER_SUPPLY_CONSORTIUM = "Power Supply Consortium",
                e.PREDATORS = "Predators",
                e.PRODUCTIVE_OUTPOST = "Productive Outpost",
                e.PROTECTED_HABITATS = "Protected Habitats",
                e.PROTECTED_VALLEY = "Protected Valley",
                e.PSYCHROPHILES = "Psychrophiles",
                e.QUANTUM_COMMUNICATIONS = "Quantum Communications",
                e.QUANTUM_EXTRACTOR = "Quantum Extractor",
                e.RAD_CHEM_FACTORY = "Rad-Chem Factory",
                e.RAD_SUITS = "Rad-Suits",
                e.RED_SPOT_OBSERVATORY = "Red Spot Observatory",
                e.REFUGEE_CAMPS = "Refugee Camps",
                e.REGOLITH_EATERS = "Regolith Eaters",
                e.RELEASE_OF_INERT_GASES = "Release of Inert Gases",
                e.RESEARCH = "Research",
                e.RESEARCH_OUTPOST = "Research Outpost",
                e.RESEARCH_COLONY = "Research Colony",
                e.RESTRICTED_AREA = "Restricted Area",
                e.ROBOTIC_WORKFORCE = "Robotic Workforce",
                e.ROVER_CONSTRUCTION = "Rover Construction",
                e.RIM_FREIGHTERS = "Rim Freighters",
                e.SABOTAGE = "Sabotage",
                e.SATELLITES = "Satellites",
                e.SEARCH_FOR_LIFE = "Search For Life",
                e.SECURITY_FLEET = "Security Fleet",
                e.SELF_SUFFICIENT_SETTLEMENT = "Self-Sufficient Settlement",
                e.SISTER_PLANET_SUPPORT = "Sister Planet Support",
                e.SKY_DOCKS = "Sky Docks",
                e.SMALL_ANIMALS = "Small Animals",
                e.SOIL_FACTORY = "Soil Factory",
                e.SOLAR_POWER = "Solar Power",
                e.SOLAR_PROBE = "Solar Probe",
                e.SOLAR_REFLECTORS = "Solar Reflectors",
                e.SOLARNET = "Solarnet",
                e.SPACE_ELEVATOR = "Space Elevator",
                e.SPACE_PORT = "Space Port",
                e.SPACE_PORT_COLONY = "Space Port Colony",
                e.SPINOFF_DEPARTMENT = "Spin-off Department",
                e.STRIP_MINE = "Strip Mine",
                e.SUBTERRANEAN_RESERVOIR = "Subterranean Reservoir",
                e.SUBZERO_SALT_FISH = "Sub-zero Salt Fish",
                e.SHUTTLES = "Shuttles",
                e.SOLAR_WIND_POWER = "Solar Wind Power",
                e.SOLETTA = "Soletta",
                e.SPACE_MIRRORS = "Space Mirrors",
                e.SPACE_STATION = "Space Station",
                e.SPECIAL_DESIGN = "Special Design",
                e.SPONSORS = "Sponsors",
                e.STEELWORKS = "Steelworks",
                e.STANDARD_TECHNOLOGY = "Standard Technology",
                e.SYMBIOTIC_FUNGUS = "Symbiotic Fungus",
                e.TARDIGRADES = "Tardigrades",
                e.TECHNOLOGY_DEMONSTRATION = "Technology Demonstration",
                e.TECTONIC_STRESS_POWER = "Tectonic Stress Power",
                e.TERRAFORMING_GANYMEDE = "Terraforming Ganymede",
                e.TITAN_AIRSCRAPPING = "Titan Air-scrapping",
                e.TITAN_FLOATING_LAUNCHPAD = "Titan Floating Launch-pad",
                e.TITAN_SHUTTLES = "Titan Shuttles",
                e.TITANIUM_MINE = "Titanium Mine",
                e.TOLL_STATION = "Toll Station",
                e.TOWING_A_COMET = "Towing A Comet",
                e.TRADE_ENVOYS = "Trade Envoys",
                e.TRADING_COLONY = "Trading Colony",
                e.TRANS_NEPTUNE_PROBE = "Trans-Neptune Probe",
                e.TREES = "Trees",
                e.TROPICAL_RESORT = "Tropical Resort",
                e.TUNDRA_FARMING = "Tundra Farming",
                e.UNDERGROUND_CITY = "Underground City",
                e.UNDERGROUND_DETONATIONS = "Underground Detonations",
                e.URBAN_DECOMPOSERS = "Urban Decomposers",
                e.URBANIZED_AREA = "Urbanized Area",
                e.VESTA_SHIPYARD = "Vesta Shipyard",
                e.VIRAL_ENHANCERS = "Viral Enhancers",
                e.VIRUS = "Virus",
                e.WARP_DRIVE = "Warp Drive",
                e.WATER_IMPORT_FROM_EUROPA = "Water Import From Europa",
                e.AERIAL_MAPPERS = "Aerial Mappers",
                e.AEROSPORT_TOURNAMENT = "Aerosport Tournament",
                e.AIR_SCRAPPING_EXPEDITION = "Air-Scrapping Expedition",
                e.APHRODITE = "Aphrodite",
                e.ATALANTA_PLANITIA_LAB = "Atalanta Planitia Lab",
                e.ATMOSCOOP = "Atmoscoop",
                e.CELESTIC = "Celestic",
                e.COMET_FOR_VENUS = "Comet for Venus",
                e.CORRODER_SUITS = "Corroder Suits",
                e.DAWN_CITY = "Dawn City",
                e.DEUTERIUM_EXPORT = "Deuterium Export",
                e.EXTRACTOR_BALLOONS = "Extractor Balloons",
                e.EXTREMOPHILES = "Extremophiles",
                e.FLOATING_HABS = "Floating Habs",
                e.FORCED_PRECIPITATION = "Forced Precipitation",
                e.FREYJA_BIODOMES = "Freyja Biodomes",
                e.GHG_IMPORT_FROM_VENUS = "GHG Import From Venus",
                e.GIANT_SOLAR_SHADE = "Giant Solar Shade",
                e.HYDROGEN_TO_VENUS = "Hydrogen to Venus",
                e.IO_SULPHUR_RESEARCH = "Io Sulphur Research",
                e.ISHTAR_MINING = "Ishtar Mining",
                e.JET_STREAM_MICROSCRAPPERS = "Jet Stream Microscrappers",
                e.LOCAL_SHADING = "Local Shading",
                e.LUNA_METROPOLIS = "Luna Metropolis",
                e.LUXURY_FOODS = "Luxury Foods",
                e.MAXWELL_BASE = "Maxwell Base",
                e.MORNING_STAR_INC = "Morning Star Inc.",
                e.NEUTRALIZER_FACTORY = "Neutralizer Factory",
                e.ORBITAL_REFLECTORS = "Orbital Reflectors",
                e.ROTATOR_IMPACTS = "Rotator Impacts",
                e.SPIN_INDUCING_ASTEROID = "Spin-Inducing Asteroid",
                e.SPONSORED_ACADEMIES = "Sponsored Academies",
                e.STRATOPOLIS = "Stratopolis",
                e.STRATOSPHERIC_BIRDS = "Stratospheric Birds",
                e.SULPHUR_EATING_BACTERIA = "Sulphur-Eating Bacteria",
                e.SULPHUR_EXPORTS = "Sulphur Exports",
                e.TERRAFORMING_CONTRACT = "Terraforming Contract",
                e.THERMOPHILES = "Thermophiles",
                e.VENUS_GOVERNOR = "Venus Governor",
                e.VENUSIAN_ANIMALS = "Venusian Animals",
                e.VENUSIAN_INSECTS = "Venusian Insects",
                e.VENUSIAN_PLANTS = "Venusian Plants",
                e.VENUS_MAGNETIZER = "Venus Magnetizer",
                e.VENUS_SOILS = "Venus Soils",
                e.VENUS_WAYSTATION = "Venus Waystation",
                e.VIRON = "Viron",
                e.WATER_TO_VENUS = "Water to Venus",
                e.WATER_SPLITTING_PLANT = "Water Splitting Plant",
                e.WAVE_POWER = "Wave Power",
                e.WINDMILLS = "Windmills",
                e.WORMS = "Worms",
                e.ZEPPELINS = "Zeppelins",
                e.BEGINNER_CORPORATION = "Beginner Corporation",
                e.CREDICOR = "CrediCor",
                e.ECOLINE = "Ecoline",
                e.HELION = "Helion",
                e.INTERPLANETARY_CINEMATICS = "Interplanetary Cinematics",
                e.INVENTRIX = "Inventrix",
                e.MINING_GUILD = "Mining Guild",
                e.PHOBOLOG = "PhoboLog",
                e.SATURN_SYSTEMS = "Saturn Systems",
                e.TERACTOR = "Teractor",
                e.THARSIS_REPUBLIC = "Tharsis Republic",
                e.THORGATE = "ThorGate",
                e.UNITED_NATIONS_MARS_INITIATIVE = "United Nations Mars Initiative",
                e.ACQUIRED_SPACE_AGENCY = "Acquired Space Agency",
                e.ALLIED_BANK = "Allied Bank",
                e.BIOFUELS = "Biofuels",
                e.BIOLAB = "Biolab",
                e.BIOSPHERE_SUPPORT = "Biosphere Support",
                e.BUSINESS_EMPIRE = "Business Empire",
                e.CHEUNG_SHING_MARS = "Cheung Shing MARS",
                e.DONATION = "Donation",
                e.EXPERIMENTAL_FOREST = "Experimental Forest",
                e.GALILEAN_MINING = "Galilean Mining",
                e.HUGE_ASTEROID = "Huge Asteroid",
                e.IO_RESEARCH_OUTPOST = "Io Research Outpost",
                e.LOAN = "Loan",
                e.MARTIAN_SURVEY = "Martian Survey",
                e.METAL_RICH_ASTEROID = "Metal-Rich Asteroid",
                e.METALS_COMPANY = "Metals Company",
                e.NITROGEN_SHIPMENT = "Nitrogen Shipment",
                e.ORBITAL_CONSTRUCTION_YARD = "Orbital Construction Yard",
                e.POINT_LUNA = "Point Luna",
                e.POWER_GENERATION = "Power Generation",
                e.RESEARCH_COORDINATION = "Research Coordination",
                e.RESEARCH_NETWORK = "Research Network",
                e.ROBINSON_INDUSTRIES = "Robinson Industries",
                e.SF_MEMORIAL = "SF Memorial",
                e.SMELTING_PLANT = "Smelting Plant",
                e.SOCIETY_SUPPORT = "Society Support",
                e.SPACE_HOTELS = "Space Hotels",
                e.SUPPLIER = "Supplier",
                e.SUPPLY_DROP = "Supply Drop",
                e.UNMI_CONTRACTOR = "UNMI Contractor",
                e.VALLEY_TRUST = "Valley Trust",
                e.VITOR = "Vitor",
                e.ARIDOR = "Aridor",
                e.ARKLIGHT = "Arklight",
                e.POSEIDON = "Poseidon",
                e.STORMCRAFT_INCORPORATED = "Stormcraft Incorporated",
                e.ARCADIAN_COMMUNITIES = "Arcadian Communities",
                e.ASTRODRILL = "AstroDrill",
                e.ADVERTISING = "Advertising",
                e.PHARMACY_UNION = "Pharmacy Union",
                e.INDUSTRIAL_CENTER = "Industrial Center",
                e.FACTORUM = "Factorum",
                e.LAKEFRONT_RESORTS = "Lakefront Resorts",
                e.TERRALABS_RESEARCH = "TerraLabs Research",
                e.SEPTUM_TRIBUS = "Septem Tribus",
                e.MONS_INSURANCE = "Mons Insurance",
                e.SPLICE = "Splice",
                e.PHILARES = "Philares",
                e.PRISTAR = "Pristar",
                e.RECYCLON = "Recyclon",
                e.UTOPIA_INVEST = "Utopia Invest",
                e.MANUTECH = "Manutech",
                e.SELF_REPLICATING_ROBOTS = "Self-replicating Robots",
                e.POLYPHEMOS = "Polyphemos",
                e.PENGUINS = "Penguins",
                e.SMALL_ASTEROID = "Small Asteroid",
                e.SNOW_ALGAE = "Snow Algae",
                e.AERIAL_LENSES = "Aerial Lenses",
                e.BANNED_DELEGATE = "Banned Delegate",
                e.CULTURAL_METROPOLIS = "Cultural Metropolis",
                e.DIASPORA_MOVEMENT = "Diaspora Movement",
                e.EVENT_ANALYSTS = "Event Analysts",
                e.GMO_CONTRACT = "GMO Contract",
                e.MARTIAN_MEDIA_CENTER = "Martian Media Center",
                e.PARLIAMENT_HALL = "Parliament Hall",
                e.PR_OFFICE = "PR Office",
                e.PUBLIC_CELEBRATIONS = "Public Celebrations",
                e.RECRUITMENT = "Recruitment",
                e.RED_TOURISM_WAVE = "Red Tourism Wave",
                e.SPONSORED_MOHOLE = "Sponsored Mohole",
                e.SUPPORTED_RESEARCH = "Supported Research",
                e.WILDLIFE_DOME = "Wildlife Dome",
                e.VOTE_OF_NO_CONFIDENCE = "Vote Of No Confidence",
                e.CERES_TECH_MARKET = "Ceres Tech Market",
                e.CLOUD_TOURISM = "Cloud Tourism",
                e.COLONIAL_ENVOYS = "Colonial Envoys",
                e.COLONIAL_REPRESENTATION = "Colonial Representation",
                e.ENVOYS_FROM_VENUS = "Envoys From Venus",
                e.FLOATING_REFINERY = "Floating Refinery",
                e.FRONTIER_TOWN = "Frontier Town",
                e.GHG_SHIPMENT = "GHG Shipment",
                e.ISHTAR_EXPEDITION = "Ishtar Expedition",
                e.JOVIAN_ENVOYS = "Jovian Envoys",
                e.L1_TRADE_TERMINAL = "L1 Trade Terminal",
                e.MICROGRAVITY_NUTRITION = "Microgravity Nutrition",
                e.RED_APPEASEMENT = "Red Appeasement",
                e.SOIL_STUDIES = "Soil Studies",
                e.SPECIAL_PERMIT = "Special Permit",
                e.SPONSORING_NATION = "Sponsoring Nation",
                e.STRATOSPHERIC_EXPEDITION = "Stratospheric Expedition",
                e.SUMMIT_LOGISTICS = "Summit Logistics",
                e.UNEXPECTED_APPLICATION = "Unexpected Application",
                e.VENUS_ALLIES = "Venus Allies",
                e.VENUS_ORBITAL_SURVEY = "Venus Orbital Survey",
                e.VENUS_SHUTTLES = "Venus Shuttles",
                e.VENUS_TRADE_HUB = "Venus Trade Hub",
                e.WG_PROJECT = "WG Project",
                e.APPLIED_SCIENCE = "Applied Science",
                e.ATMOSPHERIC_ENHANCERS = "Atmospheric Enhancers",
                e.BOARD_OF_DIRECTORS = "Board of Directors",
                e.COLONY_TRADE_HUB = "Colony Trade Hub",
                e.CORRIDORS_OF_POWER = "Corridors of Power",
                e.EARLY_COLONIZATION = "Early Colonization",
                e.FLOATING_TRADE_HUB = "Floating Trade Hub",
                e.FOCUSED_ORGANIZATION = "Focused Organization",
                e.HIGH_CIRCLES = "High Circles",
                e.INDUSTRIAL_COMPLEX = "Industrial Complex",
                e.MAIN_BELT_ASTEROIDS = "Main Belt Asteroids",
                e.NOBEL_PRIZE = "Nobel Prize",
                e.OLD_MINING_COLONY = "Old Mining Colony",
                e.PLANETARY_ALLIANCE = "Planetary Alliance",
                e.PRESERVATION_PROGRAM = "Preservation Program",
                e.PROJECT_EDEN = "Project Eden",
                e.RECESSION = "Recession",
                e.RISE_TO_POWER = "Rise To Power",
                e.SOIL_BACTERIA = "Soil Bacteria",
                e.SPACE_LANES = "Space Lanes",
                e.SUITABLE_INFRASTRUCTURE = "Suitable Infrastructure",
                e.TERRAFORMING_DEAL = "Terraforming Deal",
                e.VENUS_CONTRACT = "Venus Contract",
                e.VENUS_L1_SHADE = "Venus L1 Shade",
                e.WORLD_GOVERNMENT_ADVISOR = "World Government Advisor",
                e.NIRGAL_ENTERPRISES = "Nirgal Enterprises",
                e.PALLADIN_SHIPPING = "Palladin Shipping",
                e.ECOTEC = "EcoTec",
                e.SAGITTA_FRONTIER_SERVICES = "Sagitta Frontier Services",
                e.SPIRE = "Spire",
                e.DUSK_LASER_MINING = "Dusk Laser Mining",
                e.PROJECT_INSPECTION = "Project Inspection",
                e.ENERGY_MARKET = "Energy Market",
                e.HI_TECH_LAB = "Hi-Tech Lab",
                e.INTERPLANETARY_TRADE = "Interplanetary Trade",
                e.LAW_SUIT = "Law Suit",
                e.MERCURIAN_ALLOYS = "Mercurian Alloys",
                e.ORBITAL_CLEANUP = "Orbital Cleanup",
                e.POLITICAL_ALLIANCE = "Political Alliance",
                e.REGO_PLASTICS = "Rego Plastics",
                e.SATURN_SURFING = "Saturn Surfing",
                e.STANFORD_TORUS = "Stanford Torus",
                e.ASTEROID_HOLLOWING = "Asteroid Hollowing",
                e.COMET_AIMING = "Comet Aiming",
                e.CRASH_SITE_CLEANUP = "Crash Site Cleanup",
                e.CUTTING_EDGE_TECHNOLOGY = "Cutting Edge Technology",
                e.DIRECTED_IMPACTORS = "Directed Impactors",
                e.FIELD_CAPPED_CITY = "Field-Capped City",
                e.MAGNETIC_SHIELD = "Magnetic Shield",
                e.MELTWORKS = "Meltworks",
                e.MOHOLE_LAKE = "Mohole Lake",
                e.DIVERSITY_SUPPORT = "Diversity Support",
                e.JOVIAN_EMBASSY = "Jovian Embassy",
                e.TOPSOIL_CONTRACT = "Topsoil Contract",
                e.IMPORTED_NUTRIENTS = "Imported Nutrients",
                e.ASTEROID_DEFLECTION_SYSTEM = "Asteroid Deflection System",
                e.SUB_CRUST_MEASUREMENTS = "Sub-Crust Measurements",
                e.POTATOES = "Potatoes",
                e.MEAT_INDUSTRY = "Meat Industry",
                e.DEIMOS_DOWN_PROMO = "Deimos Down:promo",
                e.GREAT_DAM_PROMO = "Great Dam:promo",
                e.MAGNETIC_FIELD_GENERATORS_PROMO = "Magnetic Field Generators:promo",
                e.ASTEROID_RIGHTS = "Asteroid Rights",
                e.BIO_PRINTING_FACILITY = "Bio Printing Facility",
                e.BACTOVIRAL_RESEARCH = "Bactoviral Research",
                e.HARVEST = "Harvest",
                e.OUTDOOR_SPORTS = "Outdoor Sports",
                e.NEW_PARTNER = "New Partner",
                e.MERGER = "Merger",
                e.CORPORATE_ARCHIVES = "Corporate Archives",
                e.DOUBLE_DOWN = "Double Down",
                e.PSYCHE = "16 Psyche",
                e.ROBOT_POLLINATORS = "Robot Pollinators",
                e.HEAD_START = "Head Start",
                e.SUPERCAPACITORS = "Supercapacitors",
                e.DIRECTED_HEAT_USAGE = "Directed Heat Usage",
                e.ANTI_DESERTIFICATION_TECHNIQUES = "Anti-desertification Techniques",
                e.AQUEDUCT_SYSTEMS = "Aqueduct Systems",
                e.ASTRA_MECHANICA = "Astra Mechanica",
                e.CARBON_NANOSYSTEMS = "Carbon Nanosystems",
                e.KUIPER_COOPERATIVE = "Kuiper Cooperative",
                e.TYCHO_MAGNETICS = "Tycho Magnetics",
                e.CYBERIA_SYSTEMS = "Cyberia Systems",
                e.ESTABLISHED_METHODS = "Established Methods",
                e.GIANT_SOLAR_COLLECTOR = "Giant Solar Collector",
                e.HERMETIC_ORDER_OF_MARS = "Hermetic Order of Mars",
                e.HOMEOSTASIS_BUREAU = "Homeostasis Bureau",
                e.KAGUYA_TECH = "Kaguya Tech",
                e.MARS_NOMADS = "Mars Nomads",
                e.MARTIAN_LUMBER_CORP = "Martian Lumber Corp",
                e.NEPTUNIAN_POWER_CONSULTANTS = "Neptunian Power Consultants",
                e.RED_SHIPS = "Red Ships",
                e.SOLAR_LOGISTICS = "Solar Logistics",
                e.ST_JOSEPH_OF_CUPERTINO_MISSION = "St. Joseph of Cupertino Mission",
                e.STRATEGIC_BASE_PLANNING = "Strategic Base Planning",
                e.TESLARACT = "Teslaract",
                e.ICY_IMPACTORS = "Icy Impactors",
                e.SOIL_ENRICHMENT = "Soil Enrichment",
                e.CITY_PARKS = "City Parks",
                e.SUPERMARKETS = "Supermarkets",
                e.HOSPITALS = "Hospitals",
                e.PUBLIC_BATHS = "Public Baths",
                e.PROTECTED_GROWTH = "Protected Growth",
                e.VERMIN = "Vermin",
                e.CASINOS = "Casinos",
                e.PUBLIC_PLANS = "Public Plans",
                e.STATIC_HARVESTING = "Static Harvesting",
                e.WEATHER_BALLOONS = "Weather Balloons",
                e.ALBEDO_PLANTS = "Albedo Plants",
                e.STERLING_VENTS = "Sterling Vents",
                e.FLOYD_CONTINUUM = "Floyd Continuum",
                e.NEW_HOLLAND = "New Holland",
                e.POLDERTECH_DUTCH = "PolderTECH Dutch",
                e.AEROTECH = "Aerotech",
                e.AGRICOLA_INC = "Agricola Inc",
                e.CURIOSITY_II = "Curiosity II",
                e.INCITE = "Incite",
                e.MIDAS = "Midas",
                e.PLAYWRIGHTS = "Playwrights",
                e.PROJECT_WORKSHOP = "Project Workshop",
                e.UNITED_NATIONS_MISSION_ONE = "United Nations Mission One",
                e.JUNK_VENTURES = "Junk Ventures",
                e.ERIS = "Eris",
                e.ATHENA = "Athena",
                e.VALUABLE_GASES = "Valuable Gases",
                e.RESEARCH_GRANT = "Research Grant",
                e.AEROSPACE_MISSION = "Aerospace Mission",
                e.TRADE_ADVANCE = "Trade Advance",
                e.POLITICAL_UPRISING = "Political Uprising",
                e.BY_ELECTION = "By-Election",
                e.EXECUTIVE_ORDER = "Executive Order",
                e.SCIENCE_TAG_BLANK_CARD = "",
                e.SPECIAL_DESIGN_PROXY = "Special Design:proxy",
                e.BIOENGINEERING_ENCLOSURE = "Bioengineering Enclosure",
                e.BIOFERTILIZER_FACILITY = "Bio-Fertilizer Facility",
                e.BUTTERFLY_EFFECT = "Butterfly Effect",
                e.CAPITAL_ARES = "Capital:ares",
                e.COMMERCIAL_DISTRICT_ARES = "Commercial District:ares",
                e.DEIMOS_DOWN_ARES = "Deimos Down:ares",
                e.DESPERATE_MEASURES = "Desperate Measures",
                e.ECOLOGICAL_SURVEY = "Ecological Survey",
                e.ECOLOGICAL_ZONE_ARES = "Ecological Zone:ares",
                e.GEOLOGICAL_SURVEY = "Geological Survey",
                e.GREAT_DAM_ARES = "Great Dam:ares",
                e.INDUSTRIAL_CENTER_ARES = "Industrial Center:ares",
                e.LAVA_FLOWS_ARES = "Lava Flows:ares",
                e.MAGNETIC_FIELD_GENERATORS_ARES = "Magnetic Field Generators:ares",
                e.MARKETING_EXPERTS = "Marketing Experts",
                e.METALLIC_ASTEROID = "Metallic Asteroid",
                e.MINING_AREA_ARES = "Mining Area:ares",
                e.MINING_RIGHTS_ARES = "Mining Rights:ares",
                e.MOHOLE_AREA_ARES = "Mohole Area:ares",
                e.NATURAL_PRESERVE_ARES = "Natural Preserve:ares",
                e.NUCLEAR_ZONE_ARES = "Nuclear Zone:ares",
                e.OCEAN_CITY = "Ocean City",
                e.OCEAN_FARM = "Ocean Farm",
                e.OCEAN_SANCTUARY = "Ocean Sanctuary",
                e.RESTRICTED_AREA_ARES = "Restricted Area:ares",
                e.SOLAR_FARM = "Solar Farm",
                e.MARE_NECTARIS_MINE = "Mare Nectaris Mine",
                e.MARE_NUBIUM_MINE = "Mare Nubium Mine",
                e.MARE_IMBRIUM_MINE = "Mare Imbrium Mine",
                e.MARE_SERENITATIS_MINE = "Mare Serenitatis Mine",
                e.HABITAT_14 = "Habitat 14",
                e.GEODESIC_TENTS = "Geodesic Tents",
                e.SPHERE_HABITATS = "Sphere Habitats",
                e.THE_WOMB = "The Womb",
                e.TYCHO_ROAD_NETWORK = "Tycho Road Network",
                e.ARISTARCHUS_ROAD_NETWORK = "Aristarchus Road Network",
                e.SINUS_IRDIUM_ROAD_NETWORK = "Sinus Irdium Road Network",
                e.MOMENTUM_VIRUM_HABITAT = "Momentum Virium Habitat",
                e.LUNA_TRADE_STATION = "Luna Trade Station",
                e.LUNA_MINING_HUB = "Luna Mining Hub",
                e.LUNA_TRAIN_STATION = "Luna Train Station",
                e.COLONIST_SHUTTLES = "Colonist Shuttles",
                e.LUNAR_DUST_PROCESSING_PLANT = "Lunar Dust Processing Plant",
                e.DEEP_LUNAR_MINING = "Deep Lunar Mining",
                e.ANCIENT_SHIPYARDS = "Ancient Shipyards",
                e.LUNA_PROJECT_OFFICE = "Luna Project Office",
                e.LUNA_RESORT = "Luna Resort",
                e.LUNAR_OBSERVATION_POST = "Lunar Observation Post",
                e.MINING_ROBOTS_MANUF_CENTER = "Mining Robots Manuf. Center",
                e.PRIDE_OF_THE_EARTH_ARKSHIP = "Pride of the Earth Arkship",
                e.IRON_EXTRACTION_CENTER = "Iron Extraction Center",
                e.TITANIUM_EXTRACTION_CENTER = "Titanium Extraction Center",
                e.ARCHIMEDES_HYDROPONICS_STATION = "Archimedes Hydroponics Station",
                e.STEEL_MARKET_MONOPOLISTS = "Steel Market Monopolists",
                e.TITANIUM_MARKET_MONOPOLISTS = "Titanium Market Monopolists",
                e.LUNA_STAGING_STATION = "Luna Staging Station",
                e.NEW_COLONY_PLANNING_INITIAITIVES = "New Colony Planning Initiatives",
                e.AI_CONTROLLED_MINE_NETWORK = "AI Controlled Mine Network",
                e.DARKSIDE_METEOR_BOMBARDMENT = "Darkside Meteor Bombardment",
                e.UNDERGROUND_DETONATORS = "Underground Detonators",
                e.LUNAR_TRADE_FLEET = "Lunar Trade Fleet",
                e.SUBTERRANEAN_HABITATS = "Subterranean Habitats",
                e.IMPROVED_MOON_CONCRETE = "Improved Moon Concrete",
                e.MOONCRATE_BLOCK_FACTORY = "Mooncrate Block Factory",
                e.HEAVY_DUTY_ROVERS = "Heavy Duty Rovers",
                e.MICROSINGULARITY_PLANT = "Microsingularity Plant",
                e.HELIOSTAT_MIRROR_ARRAY = "Heliostat Mirror Array",
                e.LUNAR_SECURITY_STATIONS = "Lunar Security Stations",
                e.HYPERSENSITIVE_SILICON_CHIP_FACTORY = "Hypersensitive Silicon Chip Factory",
                e.COPERNICUS_SOLAR_ARRAYS = "Copernicus Solar Arrays",
                e.DARKSIDE_INCUBATION_PLANT = "Darkside Incubation Plant",
                e.WATER_TREATMENT_COMPLEX = "Water Treatment Complex",
                e.ALGAE_BIOREACTORS = "Algae Bioreactors",
                e.HE3_FUSION_PLANT = "HE3 Fusion Plant",
                e.HE3_REFINERY = "HE3 Refinery",
                e.HE3_LOBBYISTS = "HE3 Lobbyists",
                e.REVOLTING_COLONISTS = "Revolting Colonists",
                e.COSMIC_RADIATION = "Cosmic Radiation",
                e.OFF_WORLD_CITY_LIVING = "Off-World City Living",
                e.ROAD_PIRACY = "Road Piracy",
                e.LUNAR_MINE_URBANIZATION = "Lunar Mine Urbanization",
                e.THORIUM_RUSH = "Thorium Rush",
                e.HE3_PRODUCTION_QUOTAS = "HE3 Production Quotas",
                e.LUNA_CONFERENCE = "Luna Conference",
                e.WE_GROW_AS_ONE = "We Grow As One",
                e.MOONCRATE_CONVOYS_TO_MARS = "Mooncrate Convoys To Mars",
                e.LUNAR_INDEPENDENCE_WAR = "Lunar Independence War",
                e.AN_OFFER_YOU_CANT_REFUSE = "An Offer You Can't Refuse",
                e.PRELIMINARY_DARKSIDE = "Preliminary Darkside",
                e.HOSTILE_TAKEOVER = "Hostile Takeover",
                e.SYNDICATE_PIRATE_RAIDS = "Syndicate Pirate Raids",
                e.DARKSIDE_MINING_SYNDICATE = "Darkside Mining Syndicate",
                e.HE3_PROPULSION = "HE3 Propulsion",
                e.STAGING_STATION_BEHEMOTH = 'Staging Station "Behemoth"',
                e.LUNA_ARCHIVES = "Luna Archives",
                e.LUNA_SENATE = "Luna Senate",
                e.LUNA_POLITICAL_INSTITUTE = "Luna Political Institute",
                e.COPERNICUS_TOWER = "Copernicus Tower",
                e.SMALL_DUTY_ROVERS = "Small Duty Rovers",
                e.LUNAR_INDUSTRY_COMPLEX = "Lunar Industry Complex",
                e.DARKSIDE_OBSERVATORY = "Darkside Observatory",
                e.MARTIAN_EMBASSY = "Martian Embassy",
                e.EARTH_EMBASSY = "Earth Embassy",
                e.ROVER_DRIVERS_UNION = "Rover Drivers Union",
                e.LTF_HEADQUARTERS = "L.T.F. Headquarters",
                e.DARKSIDE_SMUGGLERS_UNION = "Darkside Smugglers' Union",
                e.UNDERMOON_DRUG_LORDS_NETWORK = "Undermoon Drug Lords Network",
                e.LTF_PRIVILEGES = "L.T.F. Privileges",
                e.GRAND_LUNA_ACADEMY = "Grand Luna Academy",
                e.LUNA_ECUMENOPOLIS = "Luna Ecumenopolis",
                e.ORBITAL_POWER_GRID = "Orbital Power Grid",
                e.PROCESSOR_FACTORY = "Processor Factory",
                e.LUNAR_STEEL = "Lunar Steel",
                e.RUST_EATING_BACTERIA = "Rust Eating Bacteria",
                e.SOLAR_PANEL_FOUNDRY = "Solar Panel Foundry",
                e.MOON_TETHER = "Moon Tether",
                e.NANOTECH_INDUSTRIES = "Nanotech Industries",
                e.TEMPEST_CONSULTANCY = "Tempest Consultancy",
                e.THE_DARKSIDE_OF_THE_MOON_SYNDICATE = "The Darkside of The Moon Syndicate",
                e.LUNA_HYPERLOOP_CORPORATION = "Luna Hyperloop Corporation",
                e.CRESCENT_RESEARCH_ASSOCIATION = "Crescent Research Association",
                e.LUNA_FIRST_INCORPORATED = "Luna First Incorporated",
                e.THE_GRAND_LUNA_CAPITAL_GROUP = "The Grand Luna Capital Group",
                e.INTRAGEN_SANCTUARY_HEADQUARTERS = "Intragen Sanctuary Headquarters",
                e.LUNA_TRADE_FEDERATION = "Luna Trade Federation",
                e.THE_ARCHAIC_FOUNDATION_INSTITUTE = "The Archaic Foundation Institute",
                e.FIRST_LUNAR_SETTLEMENT = "First Lunar Settlement",
                e.CORE_MINE = "Core Mine",
                e.BASIC_INFRASTRUCTURE = "Basic Infrastructure",
                e.LUNAR_PlANNING_OFFICE = "Lunar Planning Office",
                e.MINING_COMPLEX = "Mining Complex",
                e.MOON_ROAD_STANDARD_PROJECT = "Road Infrastructure",
                e.MOON_MINE_STANDARD_PROJECT = "Lunar Mine",
                e.MOON_HABITAT_STANDARD_PROJECT = "Lunar Habitat",
                e.MOON_ROAD_STANDARD_PROJECT_VARIANT_1 = "Road Infrastructure (var. 1)",
                e.MOON_MINE_STANDARD_PROJECT_VARIANT_1 = "Lunar Mine (var. 1)",
                e.MOON_HABITAT_STANDARD_PROJECT_VARIANT_1 = "Lunar Habitat (var. 1)",
                e.MOON_ROAD_STANDARD_PROJECT_VARIANT_2 = "Road Infrastructure (var. 2)",
                e.MOON_MINE_STANDARD_PROJECT_VARIANT_2 = "Lunar Mine (var. 2)",
                e.MOON_HABITAT_STANDARD_PROJECT_VARIANT_2 = "Lunar Habitat (var. 2)",
                e.BREEDING_FARMS = "Breeding Farms",
                e.PREFABRICATION_OF_HUMAN_HABITATS = "Prefabrication of Human Habitats",
                e.NEW_VENICE = "New Venice",
                e.AGRO_DRONES = "Agro-Drones",
                e.WETLANDS = "Wetlands",
                e.RARE_EARTH_ELEMENTS = "Rare-Earth Elements",
                e.ORBITAL_LABORATORIES = "Orbital Laboratories",
                e.DUST_STORM = "Dust Storm",
                e.MARTIAN_MONUMENTS = "Martian Monuments",
                e.MARTIAN_NATURE_WONDERS = "Martian Nature Wonders",
                e.MUSEUM_OF_EARLY_COLONISATION = "Museum of Early Colonisation",
                e.TERRAFORMING_CONTROL_STATION = "Terraforming Control Station",
                e.MARTIAN_TRANSHIPMENT_STATION = "Martian Transhipment Station",
                e.CERES_SPACEPORT = "Ceres Spaceport",
                e.DYSON_SCREENS = "Dyson Screens",
                e.LUNAR_EMBASSY = "Lunar Embassy",
                e.GEOLOGICAL_EXPEDITION = "Geological Expedition",
                e.EARLY_EXPEDITION = "Early Expedition",
                e.HYDROGEN_PROCESSING_PLANT = "Hydrogen Processing Plant",
                e.POWER_PLANT_PATHFINDERS = "Power Plant:Pathfinders",
                e.LUXURY_ESTATE = "Luxury Estate",
                e.RETURN_TO_ABANDONED_TECHNOLOGY = "Return to Abandoned Technology",
                e.DESIGNED_ORGANISMS = "Designed Organisms",
                e.SPACE_DEBRIS_CLEANING_OPERATION = "Space Debris Cleaning Operation",
                e.PRIVATE_SECURITY = "Private Security",
                e.SECRET_LABS = "Secret Labs",
                e.CYANOBACTERIA = "Cyanobacteria",
                e.COMMUNICATION_CENTER = "Communication Center",
                e.MARTIAN_REPOSITORY = "Martian Repository",
                e.DATA_LEAK = "Data Leak",
                e.SMALL_OPEN_PIT_MINE = "Small Open Pit Mine",
                e.SOLAR_STORM = "Solar Storm",
                e.SPACE_RELAY = "Space Relay",
                e.DECLARATION_OF_INDEPENDENCE = "Declaration of Independence",
                e.MARTIAN_CULTURE = "Martian Culture",
                e.OZONE_GENERATORS = "Ozone Generators",
                e.SMALL_COMET = "Small Comet",
                e.ECONOMIC_ESPIONAGE = "Economic Espionage",
                e.FLAT_MARS_THEORY = "Flat Mars Theory",
                e.ASTEROID_RESOURCES = "Asteroid Resources",
                e.KICKSTARTER = "Kickstarter",
                e.ECONOMIC_HELP = "Economic Help",
                e.INTERPLANETARY_TRANSPORT = "Interplanetary Transport",
                e.MARTIAN_DUST_PROCESSING_PLANT = "Martian Dust Processing Plant",
                e.CULTIVATION_OF_VENUS = "Cultivation of Venus",
                e.EXPEDITION_TO_THE_SURFACE_VENUS = "Expedition to the Surface - Venus",
                e.LAST_RESORT_INGENUITY = "Last Resort Ingenuity",
                e.CRASHLANDING = "Crashlanding",
                e.THINK_TANK = "Think Tank",
                e.BOTANICAL_EXPERIENCE = "Botanical Experience",
                e.CRYPTOCURRENCY = "Cryptocurrency",
                e.RICH_DEPOSITS = "Rich Deposits",
                e.OUMUAMUA_TYPE_OBJECT_SURVEY = "Oumuamua Type Object Survey",
                e.SOLARPEDIA = "Solarpedia",
                e.ANTHOZOA = "Anthozoa",
                e.ADVANCED_POWER_GRID = "Advanced Power Grid",
                e.SPECIALIZED_SETTLEMENT = "Specialized Settlement",
                e.CHARITY_DONATION = "Charity Donation",
                e.CURIOSITY_LABS = "Curiosity Labs",
                e.NOBEL_LABS = "Nobel Labs",
                e.HUYGENS_OBSERVATORY = "Huygens Observatory",
                e.CASSINI_STATION = "Cassini Station",
                e.MICROBIOLOGY_PATENTS = "Microbiology Patents",
                e.COORDINATED_RAID = "Coordinated Raid",
                e.LOBBY_HALLS = "Lobby Halls",
                e.RED_CITY = "Red City",
                e.VENERA_BASE = "Venera Base",
                e.GATEWAY_STATION = "Gateway Station",
                e.FLOATER_URBANISM = "Floater-Urbanism",
                e.SOIL_DETOXIFICATION = "Soil Detoxification",
                e.HIGH_TEMP_SUPERCONDUCTORS = "High Temp. Superconductors",
                e.PUBLIC_SPONSORED_GRANT = "Public Sponsored Grant",
                e.POLLINATORS = "Pollinators",
                e.SOCIAL_EVENTS = "Social Events",
                e.CONTROLLED_BLOOM = "Controlled Bloom",
                e.TERRAFORMING_ROBOTS = "Terraforming Robots",
                e.VENUS_FIRST = "Venus First",
                e.VALUABLE_GASES_PATHFINDERS = "Valuable Gases:Pathfinders",
                e.CO2_REDUCERS = "CO² Reducers",
                e.HYDROGEN_BOMBARDMENT = "Hydrogen Bombardment",
                e.RESEARCH_GRANT_PATHFINDERS = "Research Grant:Pathfinders";
                e.CREW_TRAINING = "Crew Training",
                e.SURVEY_MISSION = "Survey Mission",
                e.DESIGN_COMPANY = "Design Company",
                e.CONSOLIDATION = "Consolidation",
                e.PERSONAL_AGENDA = "Personal Agenda",
                e.VITAL_COLONY = "Vital Colony",
                e.DEEP_SPACE_OPERATIONS = "Deep Space Operations",
                e.EXPERIENCED_MARTIANS = "Experienced Martians",
                e.THE_NEW_SPACE_RACE = "The New Space Race",
                e.POLARIS = "Polaris",
                e.PLANET_PR = "planet pr",
                e.AMBIENT = "Ambient",
                e.RINGCOM = "Ringcom",
                e.CHIMERA = "Chimera",
                e.SISTEMAS_SEEBECK = "Sistemas Seebeck",
                e.SOYLENT_SEEDLING_SYSTEMS = "Soylent Seedling Systems",
                e.STEELARIS = "Steelaris",
                e.MARS_MATHS = "Mars Maths",
                e.MARS_DIRECT = "Mars Direct",
                e.MARTIAN_INSURANCE_GROUP = "Martian Insurance Group",
                e.SOLBANK = "SolBank",
                e.BIO_SOL = "Bio-Sol",
                e.AURORAI = "Aurorai",
                e.COLLEGIUM_COPERNICUS = "Collegium Copernicus",
                e.ROBIN_HAULINGS = "Robin Haulings",
                e.ODYSSEY = "Odyssey",
                e.GAGARIN_MOBILE_BASE = "Gagarin Mobile Base",
                e.MARS_FRONTIER_ALLIANCE = "Mars Frontier Alliance",
                e.MIND_SET_MARS = "Mind Set Mars",
                e.HABITAT_MARTE = "Habitat Marte",
                e.ADHAI_HIGH_ORBIT_CONSTRUCTIONS = "Adhai High Orbit Constructions",
                e.ASIMOV = "Asimov",
                e.BJORN = "Bjorn",
                e.CLARKE = "Clarke",
                e.DUNCAN = "Duncan",
                e.ENDER = "Ender",
                e.FLOYD = "Floyd",
                e.GORDON = "Gordon",
                e.GRETA = "Greta",
                e.HAL9000 = "HAL 9000",
                e.INGRID = "Ingrid",
                e.JANSSON = "Jansson",
                e.KAREN = "Karen",
                e.LOWELL = "Lowell",
                e.MUSK = "Musk",
                e.MARIA = "Maria",
                e.NAOMI = "Naomi",
                e.OSCAR = "Oscar",
                e.PETRA = "Petra",
                e.QUILL = "Quill",
                e.ROGERS = "Rogers",
                e.STEFAN = "Stefan",
                e.TATE = "Tate",
                e.ULRICH = "Ulrich",
                e.VANALLEN = "Van Allen",
                e.WILL = "Will",
                e.XAVIER = "Xavier",
                e.YVONNE = "Yvonne",
                e.ZAN = "Zan",
                e.APOLLO = "Apollo",
                e.CAESAR = "Caesar",
                e.FARADAY = "Faraday",
                e.GAIA = "Gaia",
                e.HUAN = "Huan",
                e.NEIL = "Neil",
                e.RYU = "Ryu",
                e.SHARA = "Shara",
                e.XU = "Xu",
                e.CO_LEADERSHIP = "Co-leadership",
                e.TRADE_EMBARGO = "Trade Embargo (I)",
                e.CLONE_TROOPERS = "Clone Troopers (II)",
                e.BEHOLD_THE_EMPEROR = "Behold The Emperor! (III)",
                e.TOSCHE_STATION = "Tosche Station (IV)",
                e.CLOUD_CITY = "Cloud City (V)",
                e.FOREST_MOON = "Forest Moon (VI)",
                e.TAKONDA_CASTLE = "Takonda Castle (VII)",
                e.TOOL_WITH_THE_FIRST_ORDER = "Tool with the First Order (VIII)",
                e.REY_SKYWALKER = "Rey ... Skywalker?! (IX)",
                e.GEOLOGIST_TEAM = "Geologist Team",
                e.GEOSCAN_SATELLITE = "Geoscan Satellite",
                e.TUNNEL_BORING_MACHINE = "Tunnel Boring Machine",
                e.UNDERGROUND_RAILWAY = "Underground Railway",
                e.GAIA_CITY = "Gaia City",
                e.DEEPNUKING = "Deepnuking",
                e.OLD_WORLD_MAFIA = "Old World Mafia",
                e.NIGHTCLUBS = "Nightclubs",
                e.RECKLESS_DETONATION = "Reckless Detonation",
                e.OFF_WORLD_TAX_HAVEN = "Off-World Tax Haven",
                e.SUBNAUTIC_PIRATES = "Subnautic Pirates",
                e.SOCIAL_ENGINEERING = "Social Engineering",
                e.FABRICATED_SCANDAL = "Fabricated Scandal",
                e.LABOR_TRAFFICKING = "Labor Trafficking",
                e.SUBTERRANEAN_SEA = "Subterranean Sea",
                e.FOREST_TUNNELS = "Forest Tunnels",
                e.MAN_MADE_VOLCANO = "Man-made Volcano",
                e.TUNNELING_SUBCONTRACTOR = "Tunneling Subcontractor",
                e.UNDERGROUND_AMUSEMENT_PARK = "Underground Amusement Park",
                e.CASINO = "Casino",
                e.IMPORTED_HEAVY_MACHINERY = "Imported Heavy Machinery",
                e.MICROPROBING_TECHNOLOGY = "Microprobing Technology",
                e.SEARCH_FOR_LIFE_UNDERGROUND = "Search for Life Underground",
                e.GEOTHERMAL_NETWORK = "Geothermal Network",
                e.GLOBAL_AUDIT = "Global Audit",
                e.PATENT_MANIPULATION = "Patent Manipulation",
                e.CAVE_CITY = "Cave City",
                e.UNDERGROUND_SMUGGLING_RING = "Underground Smuggling Ring",
                e.DEEPMINING = "Deepmining",
                e.BEHEMOTH_EXCAVATOR = "Behemoth Excavator",
                e.LOBBYING_NETWORK = "Lobbying Network",
                e.TUNNELING_LOOPHOLE = "Tunneling Loophole",
                e.ORBITAL_LASER_DRILL = "Orbital Laser Drill",
                e.GREY_MARKET_EXPLOITATION = "Grey Market Exploitation",
                e.EXCAVATOR_LEASING = "Excavator Leasing",
                e.LANDFILL = "Landfill",
                e.NARRATIVE_SPIN = "Narrative Spin",
                e.PRIVATE_INVESTIGATOR = "Private Investigator",
                e.CORPORATE_BLACKMAIL = "Corporate Blackmail",
                e.SCAPEGOAT = "Scapegoat",
                e.FRIENDS_IN_HIGH_PLACES = "Friends in High Places",
                e.MICROGRAVIMETRY = "Microgravimetry",
                e.STEM_FIELD_SUBSIDIES = "Stem Field Subsidies",
                e.TITAN_MANUFACTURING_COLONY = "Titan Manufacturing Colony",
                e.ROBOT_MOLES = "Robot Moles",
                e.MINING_MARKET_INSIDER = "Mining Market Insider",
                e.SERVER_SABOTAGE = "Server Sabotage",
                e.SPACE_WARGAMES = "Space Wargames",
                e.PRIVATE_MILITARY_CONTRACTOR = "Private Military Contractor",
                e.SPACE_PRIVATEERS = "Space Privateers",
                e.PERSONAL_SPACECRUISER = "Personal Spacecruiser",
                e.HYPERSPACE_DRIVE_PROTOTYPE = "Hyperspace Drive Prototype",
                e.STAR_VEGAS = "Star Vegas",
                e.PRIVATE_RESORTS = "Private Resorts",
                e.EARTHQUAKE_MACHINE = "Earthquake Machine",
                e.MICRO_GEODESICS = "Micro-Geodesics",
                e.NEUTRINOGRAPH = "Neutrinograph",
                e.SOIL_EXPORT = "Soil Export",
                e.ARTESIAN_AQUIFER = "Artesian Aquifer",
                e.CHEMICAL_FACTORY = "Chemical Factory",
                e.CORPORATE_THEFT = "Corporate Theft",
                e.UNDERGROUND_RESEARCH_CENTER = "Underground Research Center",
                e.PRICE_WARS = "Price Wars",
                e.ANTI_TRUST_CRACKDOWN = "Anti-trust Crackdown",
                e.MONOPOLY = "Monopoly",
                e.STAGED_PROTESTS = "Staged Protests",
                e.PLANT_TAX = "Plant Tax",
                e.INFRASTRUCTURE_OVERLOAD = "Infrastructure Overload",
                e.CRATER_SURVEY = "Crater Survey",
                e.INDUCED_TREMOR = "Induced Tremor",
                e.UNDERGROUND_HABITAT = "Underground Habitat",
                e.UNDERGROUND_SHELTERS = "Underground Shelters",
                e.VOLUNTEER_MINING_INITIATIVE = "Volunteer Mining Initiative",
                e.NANOFOUNDRY = "Nanofoundry",
                e.BATTERY_FACTORY = "Battery Factory",
                e.VOLTAIC_METALLURGY = "Voltaic Metallurgy",
                e.PUBLIC_SPACELINE = "Public Spaceline",
                e.MARTIAN_EXPRESS = "Martian Express",
                e.EXPEDITION_VEHICLES = "Expedition Vehicles",
                e.CUT_THROAT_BUDGETING = "Cut-throat Budgeting",
                e.CANYON_SURVEY = "Canyon Survey",
                e.CLASS_ACTION_LAWSUIT = "Class-action Lawsuit",
                e.MERCENARY_SQUAD = "Mercenary Squad",
                e.RESEARCH_DEVELOPMENT_HUB = "Research & Development Hub",
                e.PLANETARY_RIGHTS_BUYOUT = "Planetary Rights Buyout",
                e.MEDIA_FRENZY = "Media Frenzy",
                e.INVESTIGATIVE_JOURNALISM = "Investigative Journalism",
                e.WHALES = "Whales",
                e.GUERILLA_ECOLOGISTS = "Guerilla Ecologists",
                e.THIOLAVA_VENTS = "Thiolava Vents",
                e.DETECTIVE_TV_SERIES = "Detective TV Series",
                e.RACKETEERING = "Racketeering",
                e.GAS_TRUST = "Gas Trust",
                e.STING_OPERATION = "Sting Operation",
                e.FAMILY_CONNECTIONS = "Family Connections",
                e.BIOBATTERIES = "Biobatteries",
                e.EXPORT_CONVOY = "Export Convoy",
                e.ACIDIZING = "Acidizing",
                e.EXPLOITATION_OF_VENUS = "Exploitation Of Venus",
                e.DEEP_FOUNDATIONS = "Deep Foundations",
                e.HADESPHERE = "Hadesphere",
                e.DEMETRON_LABS = "Demetron Labs",
                e.JENSON_BOYLE_CO = "Jenson-Boyle & Co",
                e.HENKEI_GENETICS = "Henkei Genetics",
                e.ARBORIST_COLLECTIVE = "Arborist Collective",
                e.KINGDOM_OF_TAURARO = "Kingdom of Tauraro",
                e.AERON_GENOMICS = "Aeron Genomics",
                e.KEPLERTEC = "Keplertec",
                e.VOLTAGON = "Voltagon",
                e.ARES_MEDIA = "Ares Media",
                e.ANUBIS_SECURITIES = "Anubis Securities",
                e.HECATE_SPEDITIONS = "Hecate Speditions",
                e.FREE_TRADE_PORT = "Free Trade Port",
                e.INVESTOR_PLAZA = "Investor Plaza",
                e.INHERITED_FORTUNE = "Inherited Fortune",
                e.INTELLECTUAL_PROPERTY_THEFT = "Intellectual Property Theft",
                e.TUNNELING_OPERATION = "Tunneling Operation",
                e.GEOLOGICAL_EXPERTISE = "Geological Expertise",
                e.UNDERGROUND_SETTLEMENT = "Underground Settlement",
                e.GANYMEDE_TRADING_COMPANY = "Ganymede Trading Company",
                e.CENTRAL_RESERVOIR = "Central Reservoir",
                e.BATTERY_SHIPMENT = "Battery Shipment",
                e.DEEPWATER_DOME = "Deepwater Dome",
                e.SECRET_RESEARCH = "Secret Research",
                e.PROSPECTING = "Prospecting",
                e.ELECTION_SPONSORSHIP = "Election Sponsorship",
                e.CLOUD_VORTEX_OUTPOST = "Cloud Vortex Outpost",
                e.DELTA_PROJECT = "Delta Project",
                e.EXCAVATE_STANDARD_PROJECT = "Excavate:SP",
                e.COLLUSION_STANDARD_PROJECT = "Collusion:SP",
                e.STANDARD_TECHNOLOGY_UNDERWORLD = "Standard Technology:u",
                e.HACKERS_UNDERWORLD = "Hackers:u",
                e.HIRED_RAIDERS_UNDERWORLD = "Hired Raiders:u"
            }(t || (t = {}))
        },
        4144(e, E, A) {
            A.r(E),
            A.d(E, ["$B", 0, 8, "Ai", 0, 4, "Ap", 0, 2, "Bi", 0, 3, "C3", 0, "Terraforming Mars", "E8", 0, 4, "FJ", 0, 8, "FK", 0, 2, "IB", 0, ["en", "de", "fr", "ru", "cn", "pl", "es", "br", "it", "ko", "nl", "hu", "jp", "bg", "nb", "ua", "fi"], "I_", 0, 8, "J0", 0, "http://localhost:8080", "KE", 0, 8, "LV", 0, 4, "LZ", 0, 0, "M7", 0, 5, "NE", 0, 14, "O5", 0, 8, "OT", 0, -30, "Oc", 0, 0, "QG", 0, 6, "QL", 0, 0, "Rq", 0, 6, "T7", 0, 3, "TH", 0, -20, "Vq", 0, 3, "XN", 0, 4, "YX", 0, 9, "Yj", 0, {
                en: ["English", "English"],
                de: ["Deutsch", "German"],
                fr: ["Français", "French"],
                ru: ["Русский", "Russian"],
                cn: ["华语", "Chinese"],
                pl: ["Polski", "Polish"],
                es: ["Español", "Spanish"],
                br: ["Português Brasileiro", "Brazilian Portugese"],
                it: ["Italiano", "Italian"],
                ko: ["한국어", "Korean"],
                nl: ["Nederlands", "Dutch"],
                hu: ["Magyar", "Hungarian"],
                jp: ["日本語", "Japanese"],
                bg: ["Български", "Bulgarian"],
                nb: ["Norsk", "Norwegian"],
                ua: ["Українська", "Ukrainian"],
                fi: ["Suomi", "Finnish"]
            }, "Yq", 0, 5, "Zs", 0, 3, "_M", 0, 2, "_q", 0, 1, "aB", 0, 9, "aC", 0, -24, "ar", 0, 3, "b9", 0, 3, "cB", 0, 3, "dr", 0, [8, 14, 20], "g1", 0, 3, "gc", 0, 8, "hP", 0, 3, "hc", 0, 3, "il", 0, 16, "jS", 0, 14, "l4", 0, 7, "lG", 0, "https://discord.gg/afeyggbN6Y", "mc", 0, 2, "oY", 0, 1e3, "qM", 0, 8, "sw", 0, 3, "tH", 0, 3, "uR", 0, 2, "uq", 0, 2, "v6", 0, 3, "vp", 0, 2, "wA", 0, 30, "wB", 0, 50, "xC", 0, 16, "xL", 0, 8, "yP", 0, 30, "zZ", 0, 8, "zn", 0, 5])
        },
        9019(e, E, A) {
            A.d(E, {
                t: () => t
            });
            class t {
                static applyData(e, E) {
                    return e.message.replace(/\$\{(\d{1,2})\}/gi, (A, t) => E(e.data[t], t))
                }
                static parse(e) {
                    return e.message.split(/(\$\{\d+\})/g).filter(Boolean).map(E => {
                        if (E.startsWith("${") && E.endsWith("}")) {
                            const A = Number(E.substring(2, E.length - 1));
                            return e.data[A]
                        }
                        return E
                    }
                    )
                }
            }
        },
        3592(e, E, A) {
            var t;
            A.d(E, {
                G: () => t
            }),
            function(e) {
                e[e.STRING = 0] = "STRING",
                e[e.RAW_STRING = 1] = "RAW_STRING",
                e[e.PLAYER = 2] = "PLAYER",
                e[e.CARD = 3] = "CARD",
                e[e.AWARD = 4] = "AWARD",
                e[e.MILESTONE = 5] = "MILESTONE",
                e[e.COLONY = 6] = "COLONY",
                e[e._STANDARD_PROJECT = 7] = "_STANDARD_PROJECT",
                e[e.PARTY = 8] = "PARTY",
                e[e.TILE_TYPE = 9] = "TILE_TYPE",
                e[e.SPACE_BONUS = 10] = "SPACE_BONUS",
                e[e.GLOBAL_EVENT = 11] = "GLOBAL_EVENT",
                e[e.UNDERGROUND_TOKEN = 12] = "UNDERGROUND_TOKEN",
                e[e.SPACE = 13] = "SPACE",
                e[e.CARDS = 14] = "CARDS"
            }(t || (t = {}))
        }
    };
    const E = {};
    function A(t) {
        const r = E[t];
        if (void 0 !== r)
            return r.exports;
        const a = E[t] = {
            id: t,
            exports: {}
        };
        return e[t](a, a.exports, A),
        a.exports
    }
    A.m = e,
    ( () => {
        const e = [];
        A.O = (E, t, r, a) => {
            if (t) {
                a = a || 0;
                for (var R = e.length; R > 0 && e[R - 1][2] > a; R--)
                    e[R] = e[R - 1];
                return void (e[R] = [t, r, a])
            }
            let n = 1 / 0;
            for (R = 0; R < e.length; R++) {
                let[t,r,a] = e[R]
                  , T = !0;
                for (var o = 0; o < t.length; o++)
                    (!1 & a || n >= a) && Object.keys(A.O).every(e => A.O[e](t[o])) ? t.splice(o--, 1) : (T = !1,
                    a < n && (n = a));
                if (T) {
                    e.splice(R--, 1);
                    const A = r();
                    void 0 !== A && (E = A)
                }
            }
            return E
        }
    }
    )(),
    A.n = e => {
        const E = e && e.__esModule ? () => e.default : () => e;
        return A.d(E, {
            a: E
        }),
        E
    }
    ,
    A.d = (e, E) => {
        if (Array.isArray(E))
            for (var t = 0; t < E.length; ) {
                var r = E[t++]
                  , a = E[t++];
                A.o(e, r) ? 0 === a && t++ : 0 === a ? Object.defineProperty(e, r, {
                    enumerable: !0,
                    value: E[t++]
                }) : Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: a
                })
            }
        else
            for (var r in E)
                A.o(E, r) && !A.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: E[r]
                })
    }
    ,
    A.f = {},
    A.e = e => Promise.all(Object.keys(A.f).reduce( (E, t) => (A.f[t](e, E),
    E), [])),
    A.u = e => "chunks/" + ({
        22: "help",
        50: "load-game",
        98: "spectator-home",
        313: "game-end",
        412: "player-home",
        415: "player-input",
        491: "game-home",
        492: "games-overview",
        614: "card-list",
        646: "start-screen",
        878: "create-game",
        884: "admin",
        966: "login"
    }[e] || e) + ".js",
    A.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    A.o = (e, E) => Object.prototype.hasOwnProperty.call(e, E),
    ( () => {
        const e = {}
          , E = "terraforming-mars:";
        A.l = (t, r, a, R) => {
            if (e[t])
                return void e[t].push(r);
            let n, o;
            if (void 0 !== a) {
                const e = document.getElementsByTagName("script");
                for (var T = 0; T < e.length; T++) {
                    const A = e[T];
                    if (A.getAttribute("src") == t || A.getAttribute("data-webpack") == E + a) {
                        n = A;
                        break
                    }
                }
            }
            n || (o = !0,
            n = document.createElement("script"),
            n.charset = "utf-8",
            A.nc && n.setAttribute("nonce", A.nc),
            n.setAttribute("data-webpack", E + a),
            n.src = t),
            e[t] = [r];
            const i = (E, A) => {
                n.onerror = n.onload = null,
                clearTimeout(_);
                const r = e[t];
                if (delete e[t],
                n.parentNode?.removeChild(n),
                r?.forEach(e => e(A)),
                E)
                    return E(A)
            }
              , _ = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: n
            }), 12e4);
            n.onerror = i.bind(null, n.onerror),
            n.onload = i.bind(null, n.onload),
            o && document.head.appendChild(n)
        }
    }
    )(),
    A.r = e => {
        Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    A.dn = e => {
        (Object.getOwnPropertyDescriptor(e, "name") || {}).writable || Object.defineProperty(e, "name", {
            value: "default",
            configurable: !0
        })
    }
    ,
    A.p = "/",
    ( () => {
        const e = {
            792: 0
        };
        A.f.j = (E, t) => {
            let r = A.o(e, E) ? e[E] : void 0;
            if (0 !== r)
                if (r)
                    t.push(r[2]);
                else {
                    const a = new Promise( (A, t) => r = e[E] = [A, t]);
                    t.push(r[2] = a);
                    const R = A.p + A.u(E)
                      , n = new Error
                      , o = t => {
                        if (A.o(e, E) && (r = e[E],
                        0 !== r && (e[E] = void 0),
                        r)) {
                            const e = t && ("load" === t.type ? "missing" : t.type)
                              , A = t && t.target && t.target.src;
                            n.message = "Loading chunk " + E + " failed.\n(" + e + ": " + A + ")",
                            n.name = "ChunkLoadError",
                            n.type = e,
                            n.request = A,
                            r[1](n)
                        }
                    }
                    ;
                    A.l(R, o, "chunk-" + E, E)
                }
        }
        ,
        A.O.j = E => 0 === e[E];
        const E = (E, t) => {
            let[r,a,R] = t;
            var n, o, T = 0;
            if (r.some(E => 0 !== e[E])) {
                for (n in a)
                    A.o(a, n) && (A.m[n] = a[n]);
                if (R)
                    var i = R(A)
            }
            for (E && E(t); T < r.length; T++)
                o = r[T],
                A.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return A.O(i)
        }
          , t = self.webpackChunkterraforming_mars = self.webpackChunkterraforming_mars || [];
        t.forEach(E.bind(null, 0)),
        t.push = E.bind(null, t.push.bind(t))
    }
    )(),
    A.nc = void 0;
    let t = A.O(void 0, [96], () => A(2302));
    t = A.O(t)
}
)();
//# sourceMappingURL=main.js.map
