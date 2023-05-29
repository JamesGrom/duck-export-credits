type Auhtillo_Lead = {
	//essential
	linkedinUrl?: string;
	firstName?: string;
	lastName?: string;
	emails?: string[];
	name?: string;
	phoneNumbers?: string[];
	companyName?: string;
	companyDomain?: string;
	companyPhone?: string;
	website?: string;
	//
	profileImageURL?: string;
	personalEmail?: string;
	title?: string;
	jobTitle?: string;
	personID?: number;
	email?: string;
	freeMails?: string[];
	location?: LocationOfPerson;
	confidenceScore?: number;
	score?: number;
	// company
	companyID?: number;
	companyAddress?: CompanyAddress;
	companyRevenue?: string;
	companyRevenueRange?: string;
	companyEmployees?: number;
	companyEmployeeCountRange?: string;
	companyDescription?: string;
	certifications?: Certification[];
	isEU?: boolean;
};
