import { Therapist, Service, Testimonial, Location, Insurance } from './types';

export const INSURANCES: Insurance[] = [
  { name: "Select Health (Speech and OT)" },
  { name: "Utah Medicaid (Speech)" },
  { name: "EMI (Speech and OT)" },
  { name: "Health Choice Utah (Speech and OT)" },
  { name: "Blue Cross Blue Shield (Speech and OT)" },
  { name: "United Healthcare (Speech)" },
  { name: "Molina (Speech and OT)" }
];

export const LOCATIONS: Location[] = [
  { name: "Downtown St. George", address: "75 S 100 E Suite 2B", cityStateZip: "St. George, UT, 84770" },
  { name: "St. George", address: "230 N 1680 E Building U1", cityStateZip: "St. George, UT, 84790" },
  { name: "Washington", address: "2303 Coral Canyon Blvd Suite 104", cityStateZip: "Washington, Utah, 84780" },
  { name: "La Verkin", address: "591 N. State St.", cityStateZip: "La Verkin, Utah 84745" },
  { name: "South St. George", address: "922 E. Brigham Rd, Building 4 Unit A", cityStateZip: "St. George, UT 84790" },
];

export const SERVICES: Service[] = [
  {
    title: "Speech Therapy",
    description: "Personalized interventions for communication disorders.",
    items: [
      "Augmentative Communication",
      "Childhood Apraxia of Speech (CAS)",
      "Articulation / Phonological Processing",
      "Language Delay and Disorder",
      "Social / Pragmatic Language",
      "Stuttering"
    ],
    image: "https://picsum.photos/seed/speech/800/600"
  },
  {
    title: "Occupational Therapy",
    description: "Helping children achieve independence in daily life.",
    items: [
      "Fine Motor Skills",
      "Sensory Processing",
      "Handwriting",
      "Activities of Daily Living",
      "Developmental Delays",
      "Autism Therapy Services"
    ],
    image: "https://picsum.photos/seed/ot/800/600"
  },
  {
    title: "Feeding Therapy",
    description: "Specialized support for eating challenges.",
    items: [
      "Individual Feeding Sessions",
      "Parent Feeding Classes",
      "Working with the Child with Eating Challenges",
      "Transition off feeding tubes",
      "Sensory Processing related to food"
    ],
    image: "https://picsum.photos/seed/feeding/800/600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { author: "Jenny", text: "Madison is fantastic! We have an easily distracted kiddo, and Madison does an amazing job of getting on her level and bringing her back to the therapy exercises. The progress has been so encouraging to see!" },
  { author: "Crystal", text: "Amanda is absolutely AMAZING! She has been helping and teaching my four-year-old daughter and she has learned and progressed so much! 100% recommended!" },
  { author: "Megan", text: "The BEST therapist! My son has apraxia of speech and they hit the ground running! Working directly with the school to ensure they are on the same page with his therapies! Thank you Kerry!!!!" },
  { author: "Jori", text: "We've been seeing Angela since almost 2 years and are so grateful that we found her. Our daughter loves coming here! Angela is patient and knows how to work with short attention spans." },
  { author: "Natalie", text: "Our son really enjoys his therapy sessions with Joanna. She makes it so fun he doesn't even know he is learning! He has made so much progress and we are so pleased not only with therapy but with kids! Thank you!" },
  { author: "Kate", text: "James has been so helpful with the feeding challenges my son has. It is obvious he has a lot of experience with children with Autism like our son. We are now happy at the dinner table and our son is eating more and healthier foods." }
];

export const THERAPISTS: Therapist[] = [
  {
    id: "janene",
    name: "Janene Gough",
    title: "M.A. CCC-SLP",
    bio: "Janene earned her Bachelor’s Degree in Communicative Disorders and Deaf Education from Utah State University and her Master’s Degree in Speech Language Pathology from the University of Northern Colorado. She witnessed first hand the benefits of speech therapy including improved confidence and self-esteem. She has worked with younger children ages 3-11 and high school students.",
    image: "https://picsum.photos/seed/janene/400/400"
  },
  {
    id: "nellie",
    name: "Nellie Boyer",
    title: "M.S., CCC-SLP",
    bio: "Nellie received her Bachelor’s degree in communication disorders from Brigham Young University and her Master’s degree from Emerson College. She started her journey as a preschool paraprofessional before becoming a Speech Language Pathologist. She has experience in expressive/receptive language disorders, articulation disorders, phonological processing, and AAC.",
    image: "https://picsum.photos/seed/nellie/400/400"
  },
  {
    id: "andrew",
    name: "Andrew Nielsen",
    title: "M.S. OTR/L",
    bio: "Andrew 'Andy' Nielsen is a dedicated and experienced occupational therapist. His academic journey began at A.T. Still University in Mesa, AZ, followed by Marymount University for his Master's. He brings a unique perspective as a parent of four young children, understanding the chaos and joy that children bring. He enjoys piano, ukulele, and the outdoors.",
    image: "https://picsum.photos/seed/andrew/400/400"
  },
  {
    id: "james",
    name: "James Stewart",
    title: "M.S., OTR/L",
    bio: "James is a pediatric occupational therapist specialized in feeding therapy since 2014. He focuses on the SOS Approach to Feeding therapy. He has worked with all ages and diagnoses including Developmental difficulties (Autism, Down Syndrome), Gastrointestinal difficulties, and Nutritional difficulties. He believes success is found when parents and therapist partner together.",
    image: "https://picsum.photos/seed/james/400/400"
  },
  {
    id: "joanna",
    name: "Joanna Liddell",
    title: "M.S. CCC-SLP",
    bio: "Joanna is a licensed Speech and Language Pathologist who earned her degrees from Utah State University. She has been an SLP for nearly 15 years and an active member of ASHA with 23 years of experience. She specializes in the 4-12 age range and has a particular fondness for the elusive /r/ sound.",
    image: "https://picsum.photos/seed/joanna/400/400"
  },
  {
    id: "shaleace",
    name: "Shaleace Price",
    title: "M.S. CCC-SLP",
    bio: "Shaleace is a Utah native who earned her Master's degree from Utah State University. She has over 26 years of experience. She is an expert in working with autistic children who use alternative and augmentative communication devices (AAC). She loves the red rocks of Southern Utah.",
    image: "https://picsum.photos/seed/shaleace/400/400"
  },
  {
    id: "kelly",
    name: "Kelly Lundberg",
    title: "M.S. CCC-SLP",
    bio: "Kelly is a recent transplant to St George. She has been a speech therapist for over 25 years and loves to creatively tailor therapy activities to be functional, relevant and fun! She likes cross country skiing, fresh fennel and rain.",
    image: "https://picsum.photos/seed/kelly/400/400"
  },
  {
    id: "angela-z",
    name: "Angela Zitting",
    title: "M.S. CCC-SLP, M.Ed.",
    bio: "Angela has been a Speech Language Pathologist working with children in Early Intervention, School Systems, and Outpatient Pediatrics for over 20 years. She encourages family involvement in therapy and believes learning occurs best when children are having fun.",
    image: "https://picsum.photos/seed/angelaz/400/400"
  },
  {
    id: "amanda",
    name: "Amanda Coffey",
    title: "M.S., CCC-SLP",
    bio: "Amanda graduated from California Baptist University. She began working as a licensed Speech-Language Pathologist Assistant before pursuing her Masters at Baylor. Her clinical experience includes working in private practice, preschool and elementary school settings.",
    image: "https://picsum.photos/seed/amanda/400/400"
  },
  {
    id: "shelbi",
    name: "Shelbi Polad",
    title: "M.S., CCC-SLP",
    bio: "Shelbi received her Bachelor's degree from Utah State University and her Master's from Emerson College. She began her journey as a Registered Behavior Technician. Shelbi's clinical experience includes working in preschool and elementary school settings.",
    image: "https://picsum.photos/seed/shelbi/400/400"
  },
  {
    id: "ashley",
    name: "Ashley Griffiths",
    title: "M.S. CCC-SLP",
    bio: "CO-OWNER: Ashley is a native Idahoan. She is a graduate of Utah State University and has practiced full-time in a variety of settings since 2010. Ashley specializes in working with children on the autism spectrum disorder, early learning difficulties, and those with diverse neurotypes.",
    image: "https://picsum.photos/seed/ashley/400/400"
  },
  {
    id: "angela-d",
    name: "Angela Durrant",
    title: "M.A. CCC-SLP",
    bio: "CO-OWNER: Angela earned her bachelor's degree from Brigham Young University and her master's from Utah State. She has gained extensive knowledge in the area of augmentative and alternative communication (AAC). She is a big believer in early intervention and parent coaching.",
    image: "https://picsum.photos/seed/angelad/400/400"
  },
  {
    id: "madison",
    name: "Madison Sullivan",
    title: "M.A. CCC-SLP",
    bio: "Madison received her masters in Speech Language Pathology with an emphasis in Listening and Spoken Language from Utah State University. She has received training in auditory verbal therapy for children who are Deaf or Hard of Hearing. She specializes in the 3-10 age range.",
    image: "https://picsum.photos/seed/madison/400/400"
  }
];