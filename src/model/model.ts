export  default class Contact {  
    id:number;
    name:string;
    email:string;
    mobile:string;
    location:string;
    public constructor(args:any){    
      this.id = args.id
      this.name=args.name
      this.email=args.email
      this.mobile=args.mobile
      this.location=args.location
    }
    }