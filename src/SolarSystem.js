import React, { useEffect, useState } from "react";
import './SolarSystem.css';
import { Typography } from "@mui/material";

export default function SolarSystem() {

  let timestamp_start = new Date("2019-01-01").getTime();
  let timestamp_now = new Date().getTime();
  let secondsLeft = (timestamp_now - timestamp_start) / 1000;
  let root = document.documentElement;
  root.style.setProperty('--seconds-left', `${secondsLeft}s`);

  return (<>
      <div class="universe">
          <div class="solarsystem">
              <div class="sun">
                  <div class="planet__structure planet__structure--1"></div>
                  <div class="planet__structure planet__structure--2"></div>
                  <div class="planet__structure planet__structure--3"></div>
                  <div class="planet__structure planet__structure--4"></div>
                  <div class="planet__structure planet__structure--5"></div>
                  <div class="planet__structure planet__structure--6"></div>
              </div>
              <div class="mercury-orbit sun-orbit">
                  <div class="ascending-node ascending-node--mercury">
                      <div class="inclination inclination--mercury">
                          <div class="orbit__visual"></div>
                          <div class="orbit__shape orbit__shape--mercury">
                              <div class="planet mercury">
                                  <div class="planet__structure planet__structure--1"></div>
                                  <div class="planet__structure planet__structure--2"></div>
                                  <div class="planet__structure planet__structure--3"></div>
                                  <div class="planet__structure planet__structure--4"></div>
                                  <div class="planet__structure planet__structure--5"></div>
                                  <div class="planet__structure planet__structure--6"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="venus-orbit sun-orbit">
                  <div class="ascending-node ascending-node--venus">
                      <div class="inclination inclination--venus">
                          <div class="orbit__visual"></div>
                          <div class="orbit__shape orbit__shape--venus">
                              <div class="planet venus">
                                  <div class="planet__structure planet__structure--1"></div>
                                  <div class="planet__structure planet__structure--2"></div>
                                  <div class="planet__structure planet__structure--3"></div>
                                  <div class="planet__structure planet__structure--4"></div>
                                  <div class="planet__structure planet__structure--5"></div>
                                  <div class="planet__structure planet__structure--6"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="earth-orbit sun-orbit">
                  <div class="ascending-node ascending-node--earth">
                      <div class="inclination inclination--earth">
                          <div class="orbit__visual"></div>
                          <div class="orbit__shape orbit__shape--earth">
                              <div class="planet earth">
                                  <div class="planet__structure planet__structure--1"></div>
                                  <div class="planet__structure planet__structure--2"></div>
                                  <div class="planet__structure planet__structure--3"></div>
                                  <div class="planet__structure planet__structure--4"></div>
                                  <div class="planet__structure planet__structure--5"></div>
                                  <div class="planet__structure planet__structure--6"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="mars-orbit sun-orbit">
                  <div class="ascending-node ascending-node--mars">
                      <div class="inclination inclination--mars">
                          <div class="orbit__visual"></div>
                          <div class="orbit__shape orbit__shape--mars">
                              <div class="planet mars">
                                  <div class="planet__structure planet__structure--1"></div>
                                  <div class="planet__structure planet__structure--2"></div>
                                  <div class="planet__structure planet__structure--3"></div>
                                  <div class="planet__structure planet__structure--4"></div>
                                  <div class="planet__structure planet__structure--5"></div>
                                  <div class="planet__structure planet__structure--6"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="jupiter-orbit sun-orbit">
                  <div class="ascending-node ascending-node--jupiter">
                      <div class="inclination inclination--jupiter">
                          <div class="orbit__visual"></div>
                          <div class="orbit__shape orbit__shape--jupiter">
                              <div class="planet jupiter">
                                  <div class="planet__structure planet__structure--1"></div>
                                  <div class="planet__structure planet__structure--2"></div>
                                  <div class="planet__structure planet__structure--3"></div>
                                  <div class="planet__structure planet__structure--4"></div>
                                  <div class="planet__structure planet__structure--5"></div>
                                  <div class="planet__structure planet__structure--6"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="saturn-orbit sun-orbit">
                  <div class="ascending-node ascending-node--saturn">
                      <div class="inclination inclination--saturn">
                          <div class="orbit__visual"></div>
                          <div class="orbit__shape orbit__shape--saturn">
                              <div class="planet saturn">
                                  <div class="planet__structure planet__structure--1"></div>
                                  <div class="planet__structure planet__structure--2"></div>
                                  <div class="planet__structure planet__structure--3"></div>
                                  <div class="planet__structure planet__structure--4"></div>
                                  <div class="planet__structure planet__structure--5"></div>
                                  <div class="planet__structure planet__structure--6"></div>
                              </div>
                              <div class="planet-orbit planet-orbit--saturn">
                                  <div class="rings-of-saturn"> </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="uranus-orbit sun-orbit">
                  <div class="ascending-node ascending-node--uranus">
                      <div class="inclination inclination--uranus">
                          <div class="orbit__visual"></div>
                          <div class="orbit__shape orbit__shape--uranus">
                              <div class="planet uranus">
                                  <div class="planet__structure planet__structure--1"></div>
                                  <div class="planet__structure planet__structure--2"></div>
                                  <div class="planet__structure planet__structure--3"></div>
                                  <div class="planet__structure planet__structure--4"></div>
                                  <div class="planet__structure planet__structure--5"></div>
                                  <div class="planet__structure planet__structure--6"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="neptun-orbit sun-orbit">
                  <div class="ascending-node ascending-node--neptun">
                      <div class="inclination inclination--neptun">
                          <div class="orbit__visual"></div>
                          <div class="orbit__shape orbit__shape--neptun">
                              <div class="planet neptun">
                                  <div class="planet__structure planet__structure--1"></div>
                                  <div class="planet__structure planet__structure--2"></div>
                                  <div class="planet__structure planet__structure--3"></div>
                                  <div class="planet__structure planet__structure--4"></div>
                                  <div class="planet__structure planet__structure--5"></div>
                                  <div class="planet__structure planet__structure--6"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div style={{ width: '65vw', height: '100px', marginTop: '-3rem', position: 'absolute', zIndex: '100' }}>
        <Typography variant="h6" style={{ fontFamily: 'Open Sans', color: 'white', textAlign: 'center' }}>
          Saturn orbits the sun roughly every 30 years!
        </Typography>
      </div>
  </>)
}