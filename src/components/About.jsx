import React from 'react';

const About = () => {
    return (
        <table id="about" border="0" width="100%"
            cellpadding="0" cellspacing="0" bgcolor="black">
            <tr>
                <td>
                    <table border="0" cellpadding="15"
                        cellspacing="0" width="80%" align="center">
                        <tr>
                            <td height="180" align="center"
                                valign="middle" colspan="2">
                                <font face="Verdana" size="7"
                                    color="#cc3123">
                                    About Me
                                </font>
                                <hr color="#cc3123" width="90" />
                            </td>
                        </tr>

                        <tr>
                            <td width="40%">
                                <img src="https://www.bufferzero.com/img/logo.png" alt='IMG' />
                            </td>

                            <td width="60%">
                                <font face="Verdana" size="4"
                                    color="white">
                                    Thanks for your interest, here
                                    is a quick story of me and this
                                    website.
                                    <hr color="black" />
                                    Sandeep Jain An IIT Roorkee alumnus
                                    and founder of GeeksforGeeks. He
                                    loves to solve programming problems
                                    in most efficient ways. Apart from
                                    GeeksforGeeks, he has worked with
                                    DE Shaw and Co. as a software
                                    developer and JIIT Noida as an
                                    assistant professor.
                                    <hr color="black" />

                                    I do my work mainly in C-Language,
                                    C++ and JAVA. C++ and Data Structure
                                    and Algorithm are my stronger section.
                                    Besides these I know Web Development,
                                    LINUX and database as well.
                                    <hr color="black" />

                                    This website is basically one of my
                                    Web Development project which is
                                    built using HTML only.
                                    Here one can also find ideas for
                                    projects in different languages.

                                    Thanks again for reading this,
                                    because of people like you, it
                                    exists and prospers!
                                    <hr color="black" />
                                    Cheers,
                                    <br />
                                    <b>GeeksForGeeks.</b>
                                </font>
                            </td>
                        </tr>
                    </table>
                    <hr color="black" />
                    <hr color="black" />
                    <hr color="black" />
                </td>
            </tr>
        </table>
    );
}

export default About;
