import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const menuItems = [
    {
      name: "Эспрессо",
      description: "Классический итальянский кофе",
      price: "150 ₽",
      icon: "Coffee"
    },
    {
      name: "Капучино",
      description: "Эспрессо с молочной пеной",
      price: "220 ₽",
      icon: "Coffee"
    },
    {
      name: "Латте",
      description: "Нежный кофе с молоком",
      price: "240 ₽",
      icon: "Coffee"
    },
    {
      name: "Американо",
      description: "Эспрессо с горячей водой",
      price: "180 ₽",
      icon: "Coffee"
    },
    {
      name: "Раф кофе",
      description: "Сливочный кофейный напиток",
      price: "260 ₽",
      icon: "Coffee"
    },
    {
      name: "Флэт Уайт",
      description: "Двойной эспрессо с микропеной",
      price: "250 ₽",
      icon: "Coffee"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading text-primary">
              ☕ Пенная вечеринка
            </h1>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#menu" className="text-foreground hover:text-primary transition-colors">
                Меню
              </a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section 
        id="home" 
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.85)), url('https://cdn.poehali.dev/projects/9a0fdca8-47ea-4e3a-a277-1a643f5aa777/files/13f6b601-20ed-4834-bea9-89f5cf1299e4.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6">Добро пожаловать на пенную вечеринку</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Место, где каждая чашка кофе — это праздник вкуса и аромата
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold text-lg px-8 py-6"
          >
            Смотреть меню
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Coffee" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Качественный кофе</h3>
                <p className="text-muted-foreground">
                  Зерна из лучших регионов мира
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">С любовью</h3>
                <p className="text-muted-foreground">
                  Каждый напиток готовим от души
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Уютная атмосфера</h3>
                <p className="text-muted-foreground">
                  Место встречи друзей и коллег
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
              Наше меню
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите свой идеальный напиток из нашей коллекции кофейных шедевров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <span className="text-2xl font-bold font-heading text-primary">
                      {item.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-20 px-4 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 165, 0, 0.9), rgba(255, 165, 0, 0.95)), url('https://cdn.poehali.dev/projects/9a0fdca8-47ea-4e3a-a277-1a643f5aa777/files/704e7d83-8136-4d63-8626-780fa09d13eb.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6"></h2>
          <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto"></p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6"
          ></Button>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы всегда рады видеть вас
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Адрес</h3>
                    <p className="text-muted-foreground">Центральный район, Красноярск, 660049</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Режим работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Пт: 08:00 - 22:00<br />
                      Сб-Вс: 09:00 - 23:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+79530219853</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@pennaparty.ru<br />
                      booking@pennaparty.ru
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg font-heading mb-2">☕ Пенная вечеринка</p>
          <p className="text-primary-foreground/80">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}