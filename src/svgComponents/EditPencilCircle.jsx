import React from 'react'

const EditPencilCircle = ({ w, h }) => {
    return (
        <svg width={w ? w : '12'} height={h ? h : '12'} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.48984 0.510195C9.1631 0.183518 8.72 0 8.25798 0C7.79596 0 7.35286 0.183518 7.02612 0.510195L3.76113 3.77544C3.71895 3.81749 3.68713 3.86878 3.66817 3.92525L2.70788 6.80635C2.68526 6.87402 2.68193 6.94665 2.69826 7.0161C2.71459 7.08556 2.74994 7.14909 2.80035 7.19958C2.85076 7.25007 2.91423 7.28553 2.98365 7.30197C3.05308 7.31842 3.12571 7.3152 3.19341 7.29268L6.07428 6.33231C6.13102 6.31347 6.18258 6.28163 6.22485 6.23935L9.48984 2.97411C9.8165 2.64734 10 2.20421 10 1.74215C10 1.2801 9.8165 0.836961 9.48984 0.510195ZM8.43967 5.11073C8.49697 5.89236 8.31385 6.67282 7.91487 7.34738C7.51589 8.02193 6.92015 8.5583 6.20759 8.88451C5.49503 9.21072 4.69975 9.31116 3.92847 9.17236C3.15719 9.03355 2.44681 8.66213 1.89267 8.10795C1.33854 7.55377 0.967148 6.84334 0.82835 6.072C0.689551 5.30066 0.789984 4.50532 1.11617 3.7927C1.44235 3.08009 1.97869 2.4843 2.65319 2.08529C3.32769 1.68628 4.10809 1.50314 4.88967 1.56045L5.56801 0.88128C4.59569 0.674531 3.58258 0.787677 2.67982 1.20384C1.77705 1.62001 1.033 2.31689 0.55865 3.19054C0.0843003 4.06419 -0.0949289 5.06779 0.047697 6.05164C0.190323 7.03549 0.647161 7.94687 1.35007 8.64983C2.05297 9.35279 2.96428 9.80966 3.94806 9.9523C4.93183 10.0949 5.93535 9.91569 6.80894 9.44131C7.68252 8.96692 8.37935 8.22281 8.79548 7.31998C9.21161 6.41714 9.32475 5.40396 9.11802 4.43156L8.43967 5.11073Z" fill="#696D7A" />
        </svg>
    )
}

export default EditPencilCircle