import { Link } from "react-router-dom";
import data from "@/assets/data.json";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Industries() {
  const industries = data.industries;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Industries We Serve
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {industries.map(({ title, description, link, image }) => (
          <Card
            key={title}
            className="group h-full flex flex-col overflow-hidden hover:shadow-xl transition duration-300 hover:scale-[1.02]"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow">
              {description}
            </CardContent>
            <CardFooter>
              <Link to={link}>
                <Button className="font-semibold hover:underline">
                  Know more →
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
