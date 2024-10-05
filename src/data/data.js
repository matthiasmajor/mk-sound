import React from "react";
import { RiSoundModuleFill } from "react-icons/ri";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { FcGraduationCap } from "react-icons/fc";
import { BiLike } from "react-icons/bi";
import { MdAssuredWorkload } from "react-icons/md";
import { AiOutlineSound } from "react-icons/ai";
import { MdOutlineSurroundSound } from "react-icons/md";
import { GiUltrasound } from "react-icons/gi";
import SoundDevice from "../images/SoundDevices-LogoBlack.svg";

export const Letters = [" ", "p", "o", "k", "o", "c", "h", "a", "s", "z", "."];

export const Data = [
  {
    id: "0",
    name: "Profesjonalny sprzęt nagraniowy renomowanych marek:",
    description:
      "Sound Device, DPA, SHURE, SENNHEISER, Tentacle, Ambient, Ursa",
    icon: React.createElement(RiSoundModuleFill),
    logo: React.createElement(PiMicrophoneStageBold),
    soundDevice: React.createElement(SoundDevice),
  },
  {
    id: "1",
    name: "Wy",
    description: "Nuendo, Izotope Ozone, Fab-Filter, Waves",
    icon: React.createElement(BiLike),
  },
];

export const experiencesData = [
  {
    id: "0",
    title: "Studium realizacji dźwięku",
    realizacje: "",
    caption: "",
    date: "2000-02",
    icon: React.createElement(FcGraduationCap),
    shows: [
      {
        show: "",
      },
      {
        show: "",
      },
    ],
  },
  {
    id: "1",
    title: "Teatr Muzyczny Roma w Warszawie",
    realizacje: "Realizacja dźwięku przy spektaklach:",
    caption: "",
    date: "2000-03",
    icon: React.createElement(MdAssuredWorkload),
    shows: [
      {
        show: "",
      },
      {
        show: "",
      },
    ],
  },
  {
    id: "2",
    title: "Teatr Ochoty",
    realizacje: "Realizacja dźwięku przy spektaklach:",
    caption: "",

    date: "2003-06",
    icon: React.createElement(GiUltrasound),
    shows: [
      {
        show: "Rekin",
      },
      {
        show: "John&Mary",
      },
      {
        show: "Pułkownik Ptak",
      },
      {
        show: "Edukacja Rity",
      },
      {
        show: "Widok z Mostu",
      },
      {
        show: "Sztuka",
      },
      {
        show: "Iwanow",
      },
      {
        show: "Sylvia",
      },
      {
        show: "Kartoteka",
      },
      {
        show: "Nas troje",
      },
      {
        show: "Nas troje",
      },
    ],
  },
  {
    id: "3",
    title: "Teatr Rozmaitości",
    realizacje: "Realizacja dźwięku przy spektaklach:",
    caption: "",
    date: "2006",
    icon: React.createElement(MdOutlineSurroundSound),
    shows: [
      {
        show: "Helena S",
      },
      {
        show: "Weż przestan",
      },
      {
        show: "Projekt Willa Warszawa",
      },
    ],
  },
  {
    id: "4",
    title: "Teatr wytwórnia",
    realizacje: "Realizacja dźwięku przy spektaklach:",
    caption: "",
    date: "2006-08",
    icon: React.createElement(AiOutlineSound),
    shows: [
      {
        show: "Kraniec",
      },
      {
        show: "Ona i Ona",
      },
      {
        show: "Paw Królowej",
      },
      {
        show: "Córka słońca",
      },
      {
        show: "Yes Prince No Prince",
      },
      {
        show: "Polowanie na szczury",
      },
    ],
  },
  {
    id: "5",
    title: "GMB Pro Sound",
    realizacje: "",
    caption: "Obsługa techniczna, technik sceny",
    date: "2007-08",
    icon: React.createElement(AiOutlineSound),
    shows: [
      {
        show: "",
      },
      {
        show: "",
      },
    ],
  },
  {
    id: "6",
    title: "Muśnicki Sound System",
    realizacje: "",
    caption: "Obsługa techniczna, technik sceny",
    date: "2007-08",
    icon: React.createElement(AiOutlineSound),
    shows: [
      {
        show: "",
      },
      {
        show: "",
      },
    ],
  },

  {
    id: "7",
    title: "Teatr Narodowy",
    realizacje: "Realizacja dźwięku przy spektaklach:",
    caption: "",
    date: "2008- Do teraz",
    icon: React.createElement(MdAssuredWorkload),
    urlFirst: require("../images/otello.jpg").default,
    shows: [
      {
        show: "Otello",
      },
      {
        show: "Ifigenia",
      },
      {
        show: "Ułani",
      },
      {
        show: "Oresteja",
      },
      {
        show: "Natan Mędrzec",
      },
      {
        show: "Księżniczka na Opak Wywrócona",
      },
      {
        show: "Hedda Gabler",
      },
      {
        show: "Aktor",
      },
      {
        show: "Sprawa",
      },
      {
        show: "Tango",
      },
      {
        show: "Baron Munchausen",
      },
      {
        show: "Fredraszki",
      },
      {
        show: "Msza za Miasto Arras",
      },
      {
        show: "Garderobiany",
      },
      {
        show: "Fedra",
      },
      {
        show: "Dozorca",
      },
      {
        show: "Mewa",
      },
      {
        show: "Marat Sade",
      },
      {
        show: "Komediant",
      },
      {
        show: "Skóra Węża",
      },
      {
        show: "Kotka na Gorącym Blaszanym Dachu",
      },
    ],
  },
];

export const Shows = [];
