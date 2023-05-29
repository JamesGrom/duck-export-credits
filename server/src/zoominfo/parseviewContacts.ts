type CompanyAddress = {
	Street?: string;
	City?: string;
	State?: string;
	Zip?: string;
	CountryCode?: string;
};

type DoziIndustry = {
	name?: string;
	displayName?: string;
	isPrimary?: boolean;
	score?: number;
};

type Certification = {
	certificationName?: string;
	organizationName?: string;
};

type LocationOfPerson = {
	City?: string;
	State?: string;
	CountryCode?: string;
};

type CompanyType = "PRIVATE" | "PUBLIC";

type Person = {
	companyID?: number;
	companyName?: string;
	companyAddress?: CompanyAddress;
	companyRevenue?: string;
	companyRevenueRange?: string;
	companyEmployees?: number;
	companyEmployeeCountRange?: string;
	companyDomain?: string;
	website?: string;
	companyDescription?: string;
	companyRevenueIn000s?: number;
	doziIndustry?: DoziIndustry[];
	companyType?: CompanyType;
	certified?: boolean;
	topLevelIndustry?: string[];
	isMasked?: boolean;
	subscribed?: boolean;
	title?: string;
	jobTitle?: string;
	isPast?: string;
	personID?: number;
	firstName?: string;
	lastName?: string;
	email?: string;
	location?: LocationOfPerson;
	lastUpdatedDate?: string;
	lastMentioned?: string;
	confidenceScore?: number;
	name?: string;
	score?: number;
	certifications?: Certification[];
	isEU?: boolean;
	creationDate?: string;
	positionStartDate?: string;
	buyingCommittee?: boolean;
	hasOnlinePresence?: boolean;
	personHashtags?: string[];
	profileImageURL?: string;
	freeMails?: string[];
	noticeProvidedInfo?: {
		hasBeenNotified?: boolean;
		emailNoticeProvidedDate?: string;
	};
	personalEmail?: string;
};

const parseviewContacts = (person: Person) => {
	//
};
