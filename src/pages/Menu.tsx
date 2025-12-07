import { Star } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Reveal } from '@/components/Reveal';
import { Card } from '@/components/Card';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const menuCategories = [
  {
    title: "Entrées / Plats",
    items: [
      { name: "Soupe de poisson", price: "400 DA" },
      { name: "Brick fruits de mer", price: "400 DA" },
      { name: "Brick crevettes", price: "600 DA" },
      { name: "Salade variée (1 pers)", price: "400 DA" },
      { name: "Salade variée (2 pers)", price: "800 DA" },
      { name: "Salade de poulpe", price: "1000 DA" },
      { name: "Hmis", price: "200 DA" },
      { name: "Assiette fromage (1 pers)", price: "500 DA" },
      { name: "Assiette fromage (2 pers)", price: "1000 DA" },
      { name: "Frites maison", price: "300 DA" },
      { name: "Riz", price: "300 DA" },
      { name: "Légumes", price: "400 DA" },
    ]
  },
  {
    title: "Boissons",
    items: [
      { name: "Limonade 1L", price: "250 DA" },
      { name: "Eau plate PM", price: "50 DA" },
      { name: "Eau plate GM", price: "100 DA" },
      { name: "Canette", price: "150 DA" },
      { name: "Jus CM", price: "250 DA" },
      { name: "Jus PM", price: "150 DA" },
      { name: "Eau gazeuse GM", price: "250 DA" },
      { name: "Eau gazeuse PM", price: "150 DA" },
      { name: "Jus pressé Citron / Orange", price: "Sur demande" },
      { name: "Carafe Citron / Orange", price: "Sur demande" },
      { name: "Cocktail Mojito Grenadine (Demi / Carafe)", price: "Sur demande" },
    ]
  },
  {
    title: "Fruits",
    items: [
      { name: "Assiette fruits (1 pers)", price: "500 DA" },
      { name: "Assiette fruits (2 pers)", price: "1000 DA" },
      { name: "Dattes", price: "500 DA" },
      { name: "Assiette fruits royale", price: "2500 DA" },
    ]
  }
];

export default function Menu() {
  return (
    <AuroraBackground showRadialGradient={false}>
      {/* Special Dishes Section */}
      <section className="section-padding pt-24">
        <div className="container-width">
          {/* Section Title */}
          <div className="text-center mb-12">
            <Reveal width="100%">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Nos 3 Plats Spéciaux</h2>
              <p className="text-muted-foreground font-light max-w-2xl mx-auto">
                Découvrez nos créations signature préparées avec passion
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Petit Déjeuner Premium',
                description: 'Croissants dorés et pains frais accompagnés de cafés artisanaux préparés avec soin. Un réveil gourmand pour bien commencer la journée.',
                image: product1,
                rating: '4.8',
              },
              {
                title: 'Plat Signature du Chef',
                description: 'Nos créations culinaires préparées avec passion et savoir-faire. Une expérience gastronomique unique qui ravira vos papilles.',
                image: product2,
                rating: '4.9',
              },
              {
                title: 'Desserts Maison',
                description: 'Pâtisseries artisanales et douceurs préparées chaque jour avec des ingrédients de première qualité. La touche sucrée parfaite.',
                image: product3,
                rating: '4.7',
              },
            ].map((dish, index) => (
              <Reveal key={index} delay={index * 0.15} className="h-full">
                <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden group">
                    <img 
                      src={dish.image} 
                      alt={dish.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-semibold text-sm">{dish.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-serif text-foreground font-semibold">{dish.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="section-padding">
        <div className="container-width">
          {/* Section Title */}
          <div className="text-center mb-12">
            <Reveal width="100%">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Notre Menu</h2>
              <p className="text-muted-foreground font-light max-w-2xl mx-auto">
                Nos plats et boissons avec leurs prix
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menuCategories.map((category, categoryIndex) => (
              <Reveal key={categoryIndex} delay={categoryIndex * 0.1}>
                <div
                  className="bg-gradient-to-br from-primary/10 via-primary/5 to-background/50 backdrop-blur-md rounded-2xl p-8 border border-primary/20 shadow-lg"
                >
                  <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center text-foreground border-b border-primary/20 pb-4">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-baseline gap-4 group hover:bg-primary/5 rounded-lg px-3 py-2 transition-all duration-300"
                      >
                        <span className="text-foreground font-light flex-1">
                          {item.name}
                        </span>
                        <span className="text-amber-500 font-medium whitespace-nowrap group-hover:text-amber-400 transition-colors">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
