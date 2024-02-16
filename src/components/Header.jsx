import React from 'react'

function Header() {
    return (
        <table id="header" border="0"
            width="100%" cellpadding="0"
            cellspacing="0" bgcolor="#17bee8">
            <tr>
                <td>
                    <table border="0" cellpadding="15"
                        cellspacing="0" width="90%"
                        align="center">
                        <tr>


                            <td>
                                {/* <font face="Comic sans MS" size="6">
                                    <b>BufferZero</b>
                                </font> */}

                                <img src="https://www.bufferzero.com/img/logo.png" alt='IMG' />
                            </td>

                            <td width="15%">

                            </td>

                            <td>
                                <a href="#home"
                                    style={{ textDecoration: "none" }}>
                                    <font face="Verdana"
                                        size="5" color="black">
                                        Home
                                    </font>
                                </a>
                            </td>

                            <td>
                                |
                            </td>

                            <td>
                                <a href="#about"
                                    style={{ textDecoration: "none" }}>
                                    <font face="Verdana"
                                        size="5" color="black">
                                        About
                                    </font>
                                </a>
                            </td>

                            <td>
                                |
                            </td>

                            <td>
                                <a href="#projects"
                                    style={{ textDecoration: "none" }}>
                                    <font face="Verdana"
                                        size="5" color="black">
                                        Projects
                                    </font>
                                </a>
                            </td>

                            <td>
                                |
                            </td>

                            <td>
                                <a href="#achievements"
                                    style={{ textDecoration: "none" }}>
                                    <font face="Verdana"
                                        size="5" color="black">
                                        Achievements
                                    </font>
                                </a>
                            </td>

                            <td>
                                |
                            </td>

                            <td>
                                <a href="#contact"
                                    style={{ textDecoration: "none" }}>
                                    <font face="Verdana"
                                        size="5" color="black">
                                        Contact
                                    </font>
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    )
}

export default Header