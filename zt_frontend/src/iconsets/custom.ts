import { h } from 'vue'
import type { IconSet, IconAliases, IconProps } from 'vuetify'

const aliases = {
	clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 15C6.61553 15 5.26216 14.5895 4.11101 13.8203C2.95987 13.0511 2.06266 11.9579 1.53285 10.6788C1.00303 9.3997 0.86441 7.99224 1.13451 6.63437C1.4046 5.2765 2.07129 4.02922 3.05026 3.05026C4.02922 2.07129 5.2765 1.4046 6.63437 1.13451C7.99224 0.86441 9.3997 1.00303 10.6788 1.53285C11.9579 2.06266 13.0511 2.95987 13.8203 4.11101C14.5895 5.26216 15 6.61553 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 2C6.81332 2 5.65328 2.3519 4.66658 3.01119C3.67989 3.67047 2.91085 4.60755 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17054C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66558 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2Z" fill="currentColor"/><path d="M10.295 11L7.5 8.205V3.5H8.5V7.79L11 10.295L10.295 11Z" fill="currentColor"/></svg>',	
	close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="currentColor"/></svg>',
	cubic: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none"><path d="M13.252 4.06815L7.252 0.568148C7.17552 0.523518 7.08855 0.5 7 0.5C6.91145 0.5 6.82448 0.523518 6.748 0.568148L0.748 4.06815C0.672511 4.1122 0.609888 4.17527 0.566373 4.25107C0.522859 4.32687 0.499974 4.41275 0.5 4.50015V11.5001C0.499974 11.5875 0.522859 11.6734 0.566373 11.7492C0.609888 11.825 0.672511 11.8881 0.748 11.9321L6.748 15.4321C6.82448 15.4768 6.91145 15.5003 7 15.5003C7.08855 15.5003 7.17552 15.4768 7.252 15.4321L13.252 11.9321C13.3275 11.8881 13.3901 11.825 13.4336 11.7492C13.4771 11.6734 13.5 11.5875 13.5 11.5001V4.50015C13.5 4.41275 13.4771 4.32687 13.4336 4.25107C13.3901 4.17527 13.3275 4.1122 13.252 4.06815ZM7 1.57915L12.008 4.50015L7 7.42115L1.992 4.50015L7 1.57915ZM1.5 5.37015L6.5 8.28665V14.1301L1.5 11.2131V5.37015ZM7.5 14.1301V8.28715L12.5 5.37065V11.2131L7.5 14.1301Z" fill="currentColor"/></svg>',	
	collapse: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/></svg>',
	circleAdd: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3C16.95 3 21 7.05 21 12C21 16.95 16.95 21 12 21C7.05 21 3 16.95 3 12C3 7.05 7.05 3 12 3ZM12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5Z" fill="currentColor"/><path d="M18 11.25H12.75V6H11.25V11.25H6V12.75H11.25V18H12.75V12.75H18V11.25Z" fill="currentColor"/></svg>',	
	delete: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 9H10.5V18H9V9ZM13.5 9H15V18H13.5V9Z" fill="currentColor"/><path d="M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6ZM9 1.5H15V3H9V1.5Z" fill="currentColor"/></svg>',
	done: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 9" fill="none"><path d="M3.5 5.8535L2.25 4.60325L2.60325 4.25L3.5 5.1465L5.39625 3.25L5.75 3.60375L3.5 5.8535Z" fill="currentColor"/><path d="M4 1C3.30777 1 2.63108 1.20527 2.05551 1.58986C1.47993 1.97444 1.03133 2.52107 0.766423 3.16061C0.501516 3.80015 0.432205 4.50388 0.567253 5.18282C0.702301 5.86175 1.03564 6.48539 1.52513 6.97487C2.01461 7.46436 2.63825 7.7977 3.31719 7.93275C3.99612 8.0678 4.69985 7.99849 5.33939 7.73358C5.97894 7.46867 6.52556 7.02007 6.91015 6.4445C7.29473 5.86892 7.5 5.19223 7.5 4.5C7.5 3.57174 7.13125 2.6815 6.47487 2.02513C5.8185 1.36875 4.92826 1 4 1ZM4 7.5C3.40666 7.5 2.82664 7.32405 2.33329 6.99441C1.83994 6.66476 1.45543 6.19623 1.22836 5.64805C1.0013 5.09987 0.94189 4.49667 1.05765 3.91473C1.1734 3.33279 1.45912 2.79824 1.87868 2.37868C2.29824 1.95912 2.83279 1.6734 3.41473 1.55764C3.99667 1.44189 4.59987 1.5013 5.14805 1.72836C5.69623 1.95542 6.16477 2.33994 6.49441 2.83329C6.82405 3.32664 7 3.90666 7 4.5C7 5.29565 6.68393 6.05871 6.12132 6.62132C5.55871 7.18393 4.79565 7.5 4 7.5Z" fill="currentColor"/></svg>',	
	dot: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/></svg>',	
	edit: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M1.5 19.5H22.5V21H1.5V19.5ZM19.05 6.75C19.65 6.15 19.65 5.25 19.05 4.65L16.35 1.95C15.75 1.35 14.85 1.35 14.25 1.95L3 13.2V18H7.8L19.05 6.75ZM15.3 3L18 5.7L15.75 7.95L13.05 5.25L15.3 3ZM4.5 16.5V13.8L12 6.3L14.7 9L7.2 16.5H4.5Z" fill="currentColor"/></svg>',
	expand: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/></svg>',
	notebook: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.25 7.5H19.5V9H14.25V7.5ZM14.25 11.25H19.5V12.75H14.25V11.25ZM14.25 15H19.5V16.5H14.25V15Z" fill="currentColor"/><path d="M21 3.75H3C2.6023 3.7504 2.221 3.90856 1.93978 4.18978C1.65856 4.471 1.5004 4.8523 1.5 5.25V18.75C1.5004 19.1477 1.65856 19.529 1.93978 19.8102C2.221 20.0914 2.6023 20.2496 3 20.25H21C21.3976 20.2494 21.7788 20.0912 22.06 19.81C22.3412 19.5288 22.4994 19.1476 22.5 18.75V5.25C22.4996 4.8523 22.3414 4.471 22.0602 4.18978C21.779 3.90856 21.3977 3.7504 21 3.75ZM3 5.25H11.25V18.75H3V5.25ZM12.75 18.75V5.25H21L21.0015 18.75H12.75Z" fill="currentColor"/></svg>',
	logo: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M21.3432 32H10.6716L5.33867 24H5.33676L0 15.9943L5.33676 7.9914L10.664 0L10.6735 0.0143266V15.9914L16.0065 23.9943L21.3337 31.9857L21.3432 32Z" fill="#AE9FE8"/><path d="M26.6724 8L21.3376 0H10.6641L21.3357 16.0086V31.9857V32L26.6629 24.0086L31.9996 16.0057L26.6724 8Z" fill="#AE9FE8"/></svg>',
	monitor: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.5 1.5H22.5V4.5H19.5V1.5ZM19.5 6H22.5V9H19.5V6ZM15 1.5H18V4.5H15V1.5ZM15 6H18V9H15V6Z" fill="currentColor"/><path d="M21 12V16.5H3V4.5H12V3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V16.5C1.5 16.8978 1.65804 17.2794 1.93934 17.5607C2.22064 17.842 2.60218 18 3 18H9V21H6V22.5H18V21H15V18H21C21.3978 18 21.7794 17.842 22.0607 17.5607C22.342 17.2794 22.5 16.8978 22.5 16.5V12H21ZM13.5 21H10.5V18H13.5V21Z" fill="currentColor"/></svg>',
	play: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.25 17.2501C8.05109 17.2501 7.86032 17.1711 7.71967 17.0304C7.57902 16.8898 7.5 16.699 7.5 16.5001V7.50009C7.50007 7.37229 7.53279 7.24664 7.59506 7.13504C7.65733 7.02344 7.74708 6.92961 7.8558 6.86244C7.96451 6.79527 8.08859 6.757 8.21626 6.75125C8.34392 6.7455 8.47093 6.77246 8.58525 6.82959L17.5853 11.3296C17.7097 11.3919 17.8143 11.4877 17.8874 11.6061C17.9605 11.7245 17.9992 11.8609 17.9992 12.0001C17.9992 12.1393 17.9605 12.2757 17.8874 12.3941C17.8143 12.5125 17.7097 12.6082 17.5853 12.6706L8.58525 17.1706C8.48117 17.2227 8.3664 17.2499 8.25 17.2501ZM9 8.71359V15.2866L15.573 12.0001L9 8.71359Z" fill="currentColor"/><path d="M12 3C13.78 3 15.5201 3.52784 17.0001 4.51677C18.4802 5.50571 19.6337 6.91131 20.3149 8.55585C20.9961 10.2004 21.1743 12.01 20.8271 13.7558C20.4798 15.5016 19.6226 17.1053 18.364 18.364C17.1053 19.6226 15.5016 20.4798 13.7558 20.8271C12.01 21.1743 10.2004 20.9961 8.55585 20.3149C6.91132 19.6337 5.50571 18.4802 4.51678 17.0001C3.52785 15.5201 3 13.78 3 12C3 9.61305 3.94822 7.32387 5.63604 5.63604C7.32387 3.94821 9.61306 3 12 3ZM12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5Z" fill="currentColor" /></svg>',
	save: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16.172C16.7024 3.00011 17.211 3.2109 17.586 3.586L20.414 6.414C20.7891 6.78899 20.9999 7.29761 21 7.828V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19Z" stroke="currentColor" stroke-width="1.5"/><path d="M8.6 9H15.4C15.5591 9 15.7117 8.93679 15.8243 8.82426C15.9368 8.71174 16 8.55913 16 8.4V3.6C16 3.44087 15.9368 3.28826 15.8243 3.17574C15.7117 3.06321 15.5591 3 15.4 3H8.6C8.44087 3 8.28826 3.06321 8.17574 3.17574C8.06321 3.28826 8 3.44087 8 3.6V8.4C8 8.55913 8.06321 8.71174 8.17574 8.82426C8.28826 8.93679 8.44087 9 8.6 9ZM6 13.6V21H18V13.6C18 13.4409 17.9368 13.2883 17.8243 13.1757C17.7117 13.0632 17.5591 13 17.4 13H6.6C6.44087 13 6.28826 13.0632 6.17574 13.1757C6.06321 13.2883 6 13.4409 6 13.6Z" stroke="currentColor" stroke-width="1.5"/></svg>',
	undo: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 7.5H5.86125L8.5515 4.8105L7.5 3.75L3 8.25L7.5 12.75L8.5515 11.6888L5.8635 9H15C16.1935 9 17.3381 9.47411 18.182 10.318C19.0259 11.1619 19.5 12.3065 19.5 13.5C19.5 14.6935 19.0259 15.8381 18.182 16.682C17.3381 17.5259 16.1935 18 15 18H9V19.5H15C16.5913 19.5 18.1174 18.8679 19.2426 17.7426C20.3679 16.6174 21 15.0913 21 13.5C21 11.9087 20.3679 10.3826 19.2426 9.25736C18.1174 8.13214 16.5913 7.5 15 7.5Z" fill="currentColor"/></svg>',
	redo: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> <path d="M9 7.5H18.1388L15.4485 4.8105L16.5 3.75L21 8.25L16.5 12.75L15.4485 11.6888L18.1365 9H9C7.80653 9 6.66193 9.47411 5.81802 10.318C4.97411 11.1619 4.5 12.3065 4.5 13.5C4.5 14.6935 4.97411 15.8381 5.81802 16.682C6.66193 17.5259 7.80653 18 9 18H15V19.5H9C7.4087 19.5 5.88258 18.8679 4.75736 17.7426C3.63214 16.6174 3 15.0913 3 13.5C3 11.9087 3.63214 10.3826 4.75736 9.25736C5.88258 8.13214 7.4087 7.5 9 7.5Z" fill="currentColor"/></svg>',
	message: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.305 22.5L12 21.75L15 16.5H19.5C19.8978 16.5 20.2794 16.342 20.5607 16.0607C20.842 15.7794 21 15.3978 21 15V6C21 5.60218 20.842 5.22064 20.5607 4.93934C20.2794 4.65804 19.8978 4.5 19.5 4.5H4.5C4.10218 4.5 3.72064 4.65804 3.43934 4.93934C3.15804 5.22064 3 5.60218 3 6V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H11.25V18H4.5C3.70435 18 2.94129 17.6839 2.37868 17.1213C1.81607 16.5587 1.5 15.7956 1.5 15V6C1.5 5.20435 1.81607 4.44129 2.37868 3.87868C2.94129 3.31607 3.70435 3 4.5 3H19.5C20.2956 3 21.0587 3.31607 21.6213 3.87868C22.1839 4.44129 22.5 5.20435 22.5 6V15C22.5 15.7956 22.1839 16.5587 21.6213 17.1213C21.0587 17.6839 20.2956 18 19.5 18H15.87L13.305 22.5Z" fill="currentColor"/></svg>',
	settings: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.2499 12.5696V11.4221L21.6899 10.1621C21.9554 9.92811 22.1296 9.60784 22.1817 9.25787C22.2339 8.9079 22.1606 8.55076 21.9749 8.24957L20.2049 5.24957C20.0734 5.02177 19.8843 4.83256 19.6566 4.70092C19.4288 4.56928 19.1705 4.49984 18.9074 4.49957C18.7444 4.49832 18.5823 4.52366 18.4274 4.57457L16.6049 5.18957C16.2903 4.98048 15.9621 4.79256 15.6224 4.62707L15.2399 2.73707C15.1714 2.39178 14.9835 2.0816 14.7093 1.86085C14.4351 1.6401 14.0919 1.52283 13.7399 1.52957H10.2299C9.87797 1.52283 9.53483 1.6401 9.2606 1.86085C8.98638 2.0816 8.79853 2.39178 8.72995 2.73707L8.34745 4.62707C8.0054 4.79252 7.67467 4.98043 7.35745 5.18957L5.57245 4.54457C5.41592 4.50379 5.25383 4.48859 5.09245 4.49957C4.8294 4.49984 4.57105 4.56928 4.34332 4.70092C4.11558 4.83256 3.92647 5.02177 3.79495 5.24957L2.02495 8.24957C1.84989 8.55031 1.78483 8.90257 1.84093 9.246C1.89703 9.58943 2.07079 9.90267 2.33245 10.1321L3.74995 11.4296V12.5771L2.33245 13.8371C2.0634 14.0681 1.88489 14.3869 1.82859 14.737C1.7723 15.0871 1.84187 15.4459 2.02495 15.7496L3.79495 18.7496C3.92647 18.9774 4.11558 19.1666 4.34332 19.2982C4.57105 19.4299 4.8294 19.4993 5.09245 19.4996C5.25546 19.5008 5.41758 19.4755 5.57245 19.4246L7.39495 18.8096C7.7096 19.0187 8.03783 19.2066 8.37745 19.3721L8.75995 21.2621C8.82853 21.6074 9.01638 21.9175 9.2906 22.1383C9.56483 22.3591 9.90797 22.4763 10.2599 22.4696H13.7999C14.1519 22.4763 14.4951 22.3591 14.7693 22.1383C15.0435 21.9175 15.2314 21.6074 15.2999 21.2621L15.6824 19.3721C16.0245 19.2066 16.3552 19.0187 16.6724 18.8096L18.4874 19.4246C18.6423 19.4755 18.8044 19.5008 18.9674 19.4996C19.2305 19.4993 19.4888 19.4299 19.7166 19.2982C19.9443 19.1666 20.1334 18.9774 20.2649 18.7496L21.9749 15.7496C22.15 15.4488 22.2151 15.0966 22.159 14.7532C22.1029 14.4097 21.9291 14.0965 21.6674 13.8671L20.2499 12.5696ZM18.9074 17.9996L16.3349 17.1296C15.7327 17.6397 15.0445 18.0384 14.3024 18.3071L13.7699 20.9996H10.2299L9.69745 18.3371C8.96126 18.0608 8.27673 17.6627 7.67245 17.1596L5.09245 17.9996L3.32245 14.9996L5.36245 13.1996C5.22377 12.4232 5.22377 11.6284 5.36245 10.8521L3.32245 8.99957L5.09245 5.99957L7.66495 6.86957C8.26715 6.35949 8.9554 5.96076 9.69745 5.69207L10.2299 2.99957H13.7699L14.3024 5.66207C15.0386 5.93839 15.7232 6.33643 16.3274 6.83957L18.9074 5.99957L20.6774 8.99957L18.6374 10.7996C18.7761 11.5759 18.7761 12.3707 18.6374 13.1471L20.6774 14.9996L18.9074 17.9996Z" fill="currentColor"/><path d="M12 16.5C11.11 16.5 10.24 16.2361 9.49994 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49994C16.2361 10.24 16.5 11.11 16.5 12C16.506 12.5926 16.3937 13.1805 16.1697 13.7292C15.9457 14.2779 15.6145 14.7763 15.1954 15.1954C14.7763 15.6145 14.2779 15.9457 13.7292 16.1697C13.1805 16.3937 12.5926 16.506 12 16.5ZM12 9C11.6035 8.99077 11.2093 9.06205 10.8411 9.20954C10.473 9.35704 10.1386 9.57768 9.85812 9.85812C9.57768 10.1386 9.35704 10.473 9.20954 10.8411C9.06205 11.2093 8.99077 11.6035 9 12C8.99077 12.3965 9.06205 12.7907 9.20954 13.1589C9.35704 13.527 9.57768 13.8615 9.85812 14.1419C10.1386 14.4223 10.473 14.643 10.8411 14.7905C11.2093 14.938 11.6035 15.0092 12 15C12.3965 15.0092 12.7907 14.938 13.1589 14.7905C13.527 14.643 13.8615 14.4223 14.1419 14.1419C14.4223 13.8615 14.643 13.527 14.7905 13.1589C14.938 12.7907 15.0092 12.3965 15 12C15.0092 11.6035 14.938 11.2093 14.7905 10.8411C14.643 10.473 14.4223 10.1386 14.1419 9.85812C13.8615 9.57768 13.527 9.35704 13.1589 9.20954C12.7907 9.06205 12.3965 8.99077 12 9Z" fill="currentColor"/></svg>',
	share: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V12M11 13L20 4M20 4H15M20 4V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	status: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 13.5C4.90129 13.4995 4.80493 13.4698 4.72307 13.4146C4.64121 13.3595 4.57751 13.2813 4.54 13.19L2.165 7.5H0V6.5H2.5C2.59871 6.5005 2.69507 6.5302 2.77693 6.58536C2.85879 6.64053 2.92249 6.71869 2.96 6.81L5 11.64L9.03 0.825003C9.06576 0.729302 9.12997 0.646852 9.214 0.588746C9.29803 0.530641 9.39784 0.499671 9.5 0.500003C9.60311 0.501804 9.70314 0.535443 9.78638 0.59631C9.86963 0.657178 9.93202 0.742296 9.965 0.840003L11.86 6.5H14V7.5H11.5C11.3952 7.50027 11.2929 7.46759 11.2077 7.40658C11.1224 7.34557 11.0585 7.25931 11.025 7.16L9.5 2.5L5.47 13.175C5.43424 13.2707 5.37003 13.3532 5.286 13.4113C5.20197 13.4694 5.10216 13.5003 5 13.5Z" fill="currentColor"/></svg>',
	stop: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8M9 9v6h6V9"/></svg>'
}

const ztIconSet: IconSet = {
	component: (props: IconProps) => h(props.tag, { ...props, innerHTML: props.icon as string }),
  };
  

export { aliases, ztIconSet }
